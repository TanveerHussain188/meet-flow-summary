import { useState } from "react";
import { ArrowUpRight } from "lucide-react"; // Import icons

interface Message {
  speaker: string;
  text: string;
  timestamp: string;
  isAI?: boolean;
}

const mockMessages: Message[] = [
  { 
    speaker: "Tanveer Hussain", 
    text: "hello", 
    timestamp: "just now", 
    isAI: false 
  },
  { 
    speaker: "AI", 
    text: "Hello Tanveer! I'm your AI assistant. I can help you learn about using this app for meeting transcription, note-taking, and organization. Is there anything specific you'd like to know about the AI features?", 
    timestamp: "just now", 
    isAI: true 
  },
  { 
    speaker: "Tanveer Hussain", 
    text: "Can you tell me more about the transcription features?", 
    timestamp: "just now", 
    isAI: false 
  },
  { 
    speaker: "AI", 
    text: "Certainly! The AI provides real-time transcription for meetings, capturing spoken conversations as text. It automatically identifies different speakers, timestamps key moments, and even allows you to highlight important parts. You can access your transcripts from any device, search through them easily, and share them with your team.", 
    timestamp: "just now", 
    isAI: true 
  },
  { 
    speaker: "Tanveer Hussain", 
    text: "How accurate is the transcription?", 
    timestamp: "just now", 
    isAI: false 
  },
  { 
    speaker: "AI", 
    text: "Transcription accuracy is quite high, typically above 90% for clear audio. Factors that affect accuracy include audio quality, speaker clarity, background noise, and technical terminology. The AI is constantly improving through machine learning to handle different accents and specialized vocabulary.", 
    timestamp: "just now", 
    isAI: true 
  },
];

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        speaker: "Tanveer Hussain",
        text: inputValue,
        timestamp: "just now",
        isAI: false
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
      
      // Auto-scroll to bottom when new message is added
      setTimeout(() => {
        const chatContainer = document.getElementById("chat-messages");
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white flex flex-col h-full">
      {/* Chat header - styled to match the application's header style */}
      <div className="flex border-b py-3 px-4 flex-shrink-0 bg-white">
        <h3 className="font-medium text-gray-900">AI Chat</h3>
      </div>
      
      {/* Chat Messages - Scrollable area */}
      <div 
        id="chat-messages"
        className="flex-grow overflow-y-auto px-4 py-3 space-y-6"
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {messages.map((message, index) => (
          <div key={index} className="flex items-start">
            {/* Avatar Circle - Using colors that match the application's color scheme */}
            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0 ${
              message.isAI ? "bg-blue-500" : "bg-purple-600"
            }`}>
              {message.isAI ? (
                <span>A</span>
              ) : (
                <span>T</span>
              )}
            </div>
            
            <div className="flex-grow">
              {/* Speaker name and timestamp - similar styling to the transcript component */}
              <div className="flex items-center">
                <span className="font-medium text-gray-900">{message.speaker}</span>
                <span className="text-gray-500 text-xs ml-1">{message.timestamp}</span>
              </div>
              
              {/* Message text - styled to match the text in the application */}
              <p className="text-gray-800 mt-1">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box - Styled to match the application input style */}
      <div className="border-t p-3 flex-shrink-0">
        <div className="border rounded-full flex items-center px-4 py-2 bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask AI anything about your conversations"
            className="flex-grow focus:outline-none text-sm text-gray-700"
          />
          <button 
            onClick={handleSendMessage}
            className="text-blue-500 ml-2"
          >
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};