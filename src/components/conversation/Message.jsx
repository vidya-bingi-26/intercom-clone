import React from "react";
import { format } from "date-fns";
import Avatar from "../ui/Avatar";

const Message = ({ message, isCustomer }) => {
  return (
    <div className={`flex ${isCustomer ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-3/4 rounded-lg px-4 py-2 ${
          isCustomer ? "bg-white border border-gray-200" : "text-black"
        }`}
        style={!isCustomer ? { backgroundColor: "#D3D3FF" } : {}}
      >
        <p>{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            isCustomer ? "text-gray-500" : "text-grey-400"
          }`}
        >
          {format(message.timestamp, "h:mm a")}
        </p>
      </div>
    </div>
  );
};

export default Message;
