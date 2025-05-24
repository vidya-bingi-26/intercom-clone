import React from "react";
import {
  FiMoreVertical,
  FiPaperclip,
  FiSmile,
  FiSend,
} from "react-icons/fi";
import {FaInbox } from "react-icons/fa"
import { MdNightsStay } from "react-icons/md";
import { format } from "date-fns";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import Message from "./Message";

const ConversationView = ({ conversation, onSendMessage }) => {
  const [message, setMessage] = React.useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  
  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        <p>Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Conversation header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              src={conversation.customer.avatar}
              alt={conversation.customer.name}
            />
            <div>
              <h2 className="font-medium">{conversation.customer.name}</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{conversation.customer.email}</span>
                <span>•</span>
                <span>{conversation.customer.company}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" icon={<MdNightsStay />} />
            <Button variant="ghost" size="sm" icon={<FiMoreVertical />} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setConversation(!conversation)}
            >
              <FaInbox className="mr-2 size-5" />
              {conversation ? "Close" : "Open"}
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {conversation.messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isCustomer={message.sender === "customer"}
            />
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="border-t border-gray-200 p-4">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="3"
          />
          <div className="absolute right-3 bottom-3 flex items-center space-x-2">
            <Button variant="ghost" size="sm" icon={<FiPaperclip />} />
            <Button variant="ghost" size="sm" icon={<FiSmile />} />
            <Button
              variant="primary"
              size="sm"
              icon={<FiSend />}
              onClick={handleSend}
              disabled={!message.trim()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationView;
