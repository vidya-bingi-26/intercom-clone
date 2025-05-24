import React from "react";
import { format } from "date-fns";
import Avatar from "../ui/Avatar";


const ConversationList = ({
  conversations,
  activeConversation,
  setActiveConversation,
}) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={`p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
            activeConversation?.id === conversation.id ? "bg-blue-50" : ""
          } ${conversation.unread ? "font-semibold" : ""}`}
          onClick={() => setActiveConversation(conversation)}
        >
          <div className="flex items-start space-x-3">
            <Avatar
              src={conversation.customer.avatar}
              alt={conversation.customer.name}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm truncate">
                  {conversation.customer.name}
                </h3>
                <span className="text-xs text-gray-500">
                  {format(conversation.lastUpdated, "h:mm a")}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {conversation.messages[conversation.messages.length - 1].text}
              </p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
