import React from "react";
import Button from "../ui/Button";
import { FiMessageSquare, FiPlus } from "react-icons/fi";

const AiSuggestion = ({ suggestion, suggestions }) => {
  if (suggestions) {
    return (
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-medium">AI Assist</h2>
        </div>

        {/* Chatbot Greeting - Takes center stage */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center border-b border-gray-100">
          <div className="mb-4 p-3 bg-blue-100 rounded-full">
            <FiMessageSquare className="text-blue-600 text-2xl" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">Hi, I'm Fin AI Copilot</h3>
          <p className="text-sm text-gray-600 mt-2">
            Ask me anything about this conversation
          </p>
        </div>

        {/* Suggestions Container - Fixed at bottom */}
        <div className="overflow-y-auto" style={{ maxHeight: '45vh' }}>
          <div className="p-4 space-y-3">
            {suggestions.map((suggestionItem) => (
              <div key={suggestionItem.id} className="hover:bg-gray-50 rounded-lg transition-colors">
                <AiSuggestion suggestion={suggestionItem} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <Button variant="secondary" fullWidth icon={<FiPlus />}>
            Generate AI reply
          </Button>
        </div>
      </div>
    );
  }

  // Single suggestion render
  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-1">
        <span className={`text-xs font-medium ${
          suggestion.type === "reply" ? "bg-blue-50 text-blue-600" :
          suggestion.type === "macro" ? "bg-green-50 text-green-600" :
          "bg-purple-50 text-purple-600"
        } px-2 py-1 rounded-full`}>
          {suggestion.type === "reply" ? "Suggested" :
           suggestion.type === "macro" ? "Macro" : "Article"}
        </span>
        <Button variant="link" size="xs">
          {suggestion.type === "reply" ? "Use" :
           suggestion.type === "macro" ? "Apply" : "Share"}
        </Button>
      </div>
      <p className="text-sm text-gray-800">{suggestion.text || suggestion.title}</p>
    </div>
  );
};

export default AiSuggestion;