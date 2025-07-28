// config.js
// =============================================================================
// Chat Application Configuration
// =============================================================================
// This configuration file stores metadata and descriptions related to the Chat Agent component.
// The goal is to keep the main component clean and maintainable.
//
// Key Features:
// - Stores the descriptive header for the chat component.
// - Provides metadata such as the author and version.
// - Can be extended for additional configuration settings in the future.
// =============================================================================

const chatConfig = {
  flowURL:
    "https://api.zerowidth.ai/v1/process/Vmz10LAZf8lTw58SCESp",
  header: {
    title: "Mary - Your Guide to Women in Computing",
    description:
      "I am Mary, a computer docent and I have witnessed it all throughout the 20th century -  the amazing contributions made by women to the field of computing! AND! I am here to share it all with you! Ask away!",
  },
  suggestedPromptsTitle: "Welcome! I am Mary, a computer docent and your one and only witness to the entire history of computing and women's contribution to it! Ask away!",
  suggestedPrompts: [
    "Make me a calling card of Lady Ada Lovelace?",
    "Why should I care about women in computing?",
    "Tell me about female computers in the 1980’s?",
  ],
  chatInputPlaceholder: "Chat with me!",
  maxChatHeight: 400,
};

export default chatConfig;
