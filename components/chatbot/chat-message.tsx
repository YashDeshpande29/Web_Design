import { format } from "date-fns";
import { Send } from "lucide-react";
import { useState } from "react";

interface ChatMessageProps {
  message: {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
    buttons?: Array<{
      label: string;
      url?: string; // Optional for internal actions
      action?: () => void; // Optional for triggering internal logic
    }>;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const { text, sender, timestamp, buttons } = message;
  const [otherInput, setOtherInput] = useState(""); // State for the "Other" input field
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); // State for confirmation message

  const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherInput(e.target.value);
  };

  const handleSendOtherMessage = () => {
    if (!otherInput.trim()) return;

    // Simulate sending the email
    const mailtoLink = `mailto:newbugllc@gmail.com?subject=User%20Request&body=${encodeURIComponent(
      otherInput
    )}`;
    window.location.href = mailtoLink;

    // Set confirmation message
    setConfirmationMessage(
      "Thank you for your message! We've received your request and will get back to you shortly. In the meantime, feel free to explore the options below or ask another question."
    );

    setOtherInput(""); // Clear the input field
  };

  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-s">{text}</p>

        {buttons && buttons.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.action}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded hover:bg-blue-200 transition"
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {/* Other Input Field for All Bot Responses */}
        {sender === "bot" && !confirmationMessage && (
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              value={otherInput}
              onChange={handleOtherInputChange}
              placeholder="Other (Please be specific)"
              className="flex-1 border border-gray-300 rounded-md py-1 px-2 text-s focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendOtherMessage}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              aria-label="Send other message"
            >
              <Send size={16} />
            </button>
          </div>
        )}

        {/* Confirmation Message */}
        {confirmationMessage && (
          <div className="mt-4">
            <p className="text-s text-gray-800">{confirmationMessage}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {buttons?.map((btn, index) => (
                <button
                  key={index}
                  onClick={btn.action}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded hover:bg-blue-200 transition"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className={`text-sm mt-1 ${sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
          {format(timestamp, "h:mm a")}
        </p>
      </div>
    </div>
  );
}
