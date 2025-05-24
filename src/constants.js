export const NAV_ITEMS = [
  { id: "inbox", icon: "FiMessageSquare", label: "Inbox" },
  { id: "contacts", icon: "FiUsers", label: "Contacts" },
  { id: "settings", icon: "FiSettings", label: "Settings" },
  { id: "help", icon: "FiHelpCircle", label: "Help" },
];

export const MOCK_CONVERSATIONS = [
  {
    id: 1,
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "Acme Inc",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "Hi there, I'm having trouble logging into my account.",
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
      },
      {
        id: 2,
        sender: "agent",
        text: "Hi Sarah! Sorry to hear that. Can you tell me what error message you're seeing?",
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
      },
    ],
    status: "open",
    priority: "high",
    unread: true,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: 2,
    customer: {
      name: "Michael Chen",
      email: "michael@example.com",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "TechCorp",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "I love your product! Do you have any plans to add dark mode?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      },
    ],
    status: "open",
    priority: "medium",
    unread: false,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: 3,
    customer: {
      name: "Emma Davis",
      email: "emma@example.com",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      company: "DesignCo",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "The checkout process seems to be broken on mobile.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      },
      {
        id: 2,
        sender: "agent",
        text: "Thanks for reporting this! We're looking into it.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
      },
    ],
    status: "pending",
    priority: "high",
    unread: false,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 4),
  },
  {
    id: 4,
    customer: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      company: "FinancePro",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "How do I export my transaction history?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
      },
      {
        id: 2,
        sender: "agent",
        text: "You can find the export option under Account Settings > Data.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 7),
      },
    ],
    status: "closed",
    priority: "medium",
    unread: false,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 7),
  },
  {
    id: 5,
    customer: {
      name: "Olivia Martinez",
      email: "olivia@example.com",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      company: "HealthPlus",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "My subscription was charged twice this month.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
      },
    ],
    status: "open",
    priority: "high",
    unread: true,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: 6,
    customer: {
      name: "James Brown",
      email: "james@example.com",
      avatar: "https://randomuser.me/api/portraits/men/95.jpg",
      company: "LogiTech",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "When will the API documentation be updated?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
      {
        id: 2,
        sender: "agent",
        text: "We're updating it this week. I'll send you a notification when it's ready.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
      },
    ],
    status: "pending",
    priority: "medium",
    unread: false,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 22),
  },
  {
    id: 7,
    customer: {
      name: "Sophia Garcia",
      email: "sophia@example.com",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      company: "EduSoft",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "Can you explain the pricing plans in more detail?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
      },
    ],
    status: "open",
    priority: "low",
    unread: false,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 36),
  },
  {
    id: 8,
    customer: {
      name: "William Taylor",
      email: "william@example.com",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      company: "BuildRight",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "The dashboard isn't loading any data for me.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
      },
      {
        id: 2,
        sender: "agent",
        text: "Could you try clearing your cache and logging in again?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 47),
      },
    ],
    status: "open",
    priority: "high",
    unread: true,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 47),
  },
  {
    id: 9,
    customer: {
      name: "Ava Anderson",
      email: "ava@example.com",
      avatar: "https://randomuser.me/api/portraits/women/51.jpg",
      company: "MarketGrow",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "Do you offer volume discounts for enterprise customers?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72),
      },
    ],
    status: "open",
    priority: "medium",
    unread: false,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 72),
  },
  {
    id: 10,
    customer: {
      name: "Benjamin Lee",
      email: "benjamin@example.com",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      company: "DataInsight",
    },
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "I need help setting up the integration with our CRM.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96),
      },
      {
        id: 2,
        sender: "agent",
        text: "I'll connect you with our integration specialist.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 95),
      },
    ],
    status: "pending",
    priority: "high",
    unread: true,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 95),
  },
];

export const MOCK_AI_SUGGESTIONS = [
  {
    id: 1,
    type: "reply",
    text: 'Im facing login issue',
  },
  {
    id: 2,
    type: "macro",
    text: "Common login issues",
    shortcut: "Ctrl+1",
  },
  {
    id: 3,
    type: "article",
    title: "Troubleshooting login problems",
    url: "https://help.example.com/login-issues",
  },
];
