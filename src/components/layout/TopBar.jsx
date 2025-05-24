import React from "react";
import { FiSearch, FiChevronDown, FiFilter } from "react-icons/fi";
import Button from "../ui/Button";

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">Inbox</h1>
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            icon={<FiChevronDown />}
            iconPosition="right"
          >
            All conversations
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search conversations..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <Button variant="ghost" size="sm" icon={<FiFilter />} />
      </div>
    </div>
  );
};

export default TopBar;
