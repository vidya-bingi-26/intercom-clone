import React, { useState } from "react";
import InboxPage from "./pages/InboxPage";
import Navigation from "./components/layout/Navigation";
// import ContactsPage from "./pages/ContactsPage";
// import SettingsPage from "./pages/SettingsPage";
// import HelpPage from "./pages/HelpPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("inbox");

  const renderPage = () => {
    switch (activeTab) {
      case "inbox":
        return <InboxPage />;
      default:
        return <InboxPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      {/* Left sidebar - Navigation */}
      {/* <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
        <div className="mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
            I
          </div>
        </div>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div> */}

      {/* Main content area */}
      {renderPage()}
    </div>
  );
};

export default App;
