import React from "react";
import {
  FiMessageSquare,
  FiUsers,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { NAV_ITEMS } from "../../constants";

const Navigation = ({ activeTab, setActiveTab }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "FiMessageSquare":
        return <FiMessageSquare size={20} />;
      case "FiUsers":
        return <FiUsers size={20} />;
      case "FiSettings":
        return <FiSettings size={20} />;
      case "FiHelpCircle":
        return <FiHelpCircle size={20} />;
      default:
        return null;
    }
  };

  return (
    <nav className="flex flex-col items-center space-y-6">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`p-2 rounded-lg ${
            activeTab === item.id
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          {getIcon(item.icon)}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
