import React, { useState } from "react";
import { MOCK_CONVERSATIONS, MOCK_AI_SUGGESTIONS } from "../constants";
import MainLayout from "../components/layout/MainLayout";
import ConversationList from "../components/conversation/ConversationList";
import ConversationView from "../components/conversation/ConversationView";
import AiSuggestion from "../components/ai/AiSuggestion";

const InboxPage = () => {
  const [activeConversation, setActiveConversation] = useState(
    MOCK_CONVERSATIONS[0]
  );
  const [conversations, setConversations] = useState(MOCK_CONVERSATIONS);
  const [aiSuggestions, setAiSuggestions] = useState(MOCK_AI_SUGGESTIONS);

  const handleSendMessage = (message) => {
    if (!message.trim() || !activeConversation) return;

    const updatedConversation = {
      ...activeConversation,
      messages: [
        ...activeConversation.messages,
        {
          id: activeConversation.messages.length + 1,
          sender: "agent",
          text: message,
          timestamp: new Date(),
        },
      ],
      lastUpdated: new Date(),
    };

    setActiveConversation(updatedConversation);
    setConversations(
      conversations.map((conv) =>
        conv.id === updatedConversation.id ? updatedConversation : conv
      )
    );
  };

  return (
    <MainLayout
      sidebarContent={
        <ConversationList
          conversations={conversations}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
        />
      }
      mainContent={
        <ConversationView
          conversation={activeConversation}
          onSendMessage={handleSendMessage}
        />
      }
      rightSidebarContent={<AiSuggestion suggestions={aiSuggestions} />}
    />
  );
};

export default InboxPage;
