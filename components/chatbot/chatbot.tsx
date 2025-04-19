"use client";
import React, { useState } from "react";
import ChatMessage from "@/components/chatbot/chat-message";
import { chatbotData } from "@/data/chatbot-data";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user"; // Strictly "bot" or "user"
  timestamp: Date;
  buttons?: Array<{
    label: string;
    url?: string;
    action?: () => void;
  }>;
}

const Chatbot = () => {
    const [messages, setMessages] = useState<Message[]>([
      {
        id: "1",
        text: chatbotData.welcomeMessage,
        sender: "bot",
        timestamp: new Date(),
        buttons: chatbotData.quickActions.map((action) => ({
          label: action.label,
          url: action.url,
          action: () => window.open(action.url, "_blank"),
        })),
      },
    ]);

  const handleUserInput = (text: string) => {
    // Add the user's message to the chat
    setMessages((prev) => [
      ...prev,
      { id: `${prev.length + 1}`, text, sender: "user", timestamp: new Date() },
    ]);

    // Find a matching rule based on keywords
    const lowerText = text.toLowerCase();
    const matchingRule = chatbotData.rules.find((rule) =>
      rule.keywords.some((keyword) => lowerText.includes(keyword))
    );

    // Respond based on the matching rule or fallback message
    const botResponse = matchingRule
      ? matchingRule.response
      : chatbotData.fallbackMessage;

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${prev.length + 1}`,
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleQuickAction = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>

      {/* Quick Action Buttons */}
      <div className="quick-actions flex gap-2 p-4">
        {chatbotData.quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleQuickAction(action.url)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="input p-4">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value.trim()) {
              handleUserInput(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Chatbot;