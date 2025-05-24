import React from "react";
import TopBar from "./TopBar";

const MainLayout = ({
  sidebarContent,
  mainContent,
  rightSidebarContent,
  showTopBar = true,
}) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {showTopBar && <TopBar />}

      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar */}
        {sidebarContent && (
          <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
            {sidebarContent}
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col bg-white">{mainContent}</div>

        {/* Right sidebar */}
        {rightSidebarContent && (
          <div className="w-80 border-l border-gray-200 bg-white flex flex-col">
            {rightSidebarContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
