"use client";

import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { chatbotData } from "@/data/chatbot-data";
import ChatMessage from "./chat-message";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  buttons?: { label: string; url: string; action?: () => void }[];
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: chatbotData.welcomeMessage,
      sender: "bot",
      timestamp: new Date(),
      buttons: chatbotData.quickActions.map((action) => ({
        label: action.label,
        url: action.url,
        action: () => {
          if (action.url) window.location.href = action.url;
        },
      })),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const processUserMessage = (userMessage: string) => {
    const matchedRule = chatbotData.rules.find((rule) =>
      rule.keywords.some((keyword) =>
        userMessage.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    if (matchedRule) {
      return {
        text: matchedRule.response,
        buttons: matchedRule.actions?.map((action) => ({
          label: action.label,
          url: action.url,
          action: () => {
            if (action.url) window.location.href = action.url;
          },
        })),
      };
    }

    return { text: chatbotData.fallbackMessage };
  };

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = processUserMessage(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply.text,
        sender: "bot",
        timestamp: new Date(),
        buttons: botReply.buttons,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        const input = widgetRef.current?.querySelector("input");
        (input as HTMLInputElement)?.focus();
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div className="chatbot-widget fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div
          ref={widgetRef}
          className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[500px] border border-gray-200"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-base">CloudX Assistant</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <span className="dot bg-gray-400 w-2 h-2 rounded-full animate-bounce" />
                    <span className="dot bg-gray-400 w-2 h-2 rounded-full animate-bounce delay-200" />
                    <span className="dot bg-gray-400 w-2 h-2 rounded-full animate-bounce delay-400" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
