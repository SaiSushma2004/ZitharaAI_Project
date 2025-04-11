// src/ChatAssistant.tsx

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#fefefe',
  fontFamily: 'Arial',
  headerBgColor: '#E11D48',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#E11D48',
  botFontColor: '#fff',
  userBubbleColor: '#f1f1f1',
  userFontColor: '#333',
};

const steps = [
  {
    id: '1',
    message: 'Welcome to Zithara Jewelry Assistant! What can I help you with today?',
    trigger: 'user-choice',
  },
  {
    id: 'user-choice',
    options: [
      { value: 'occasion', label: 'Occasion-Based', trigger: 'occasion-q1' },
      { value: 'type', label: 'Jewelry Type', trigger: 'type-q1' },
      { value: 'budget', label: 'Budget-Based', trigger: 'budget-q1' },
      { value: 'style', label: 'Style Preferences', trigger: 'style-q1' },
    ],
  },
  {
    id: 'occasion-q1',
    message: "What is the occasion you're shopping for?",
    trigger: 'occasion-q1-a',
  },
  {
    id: 'occasion-q1-a',
    user: true,
    trigger: 'occasion-q2',
  },
  {
    id: 'occasion-q2',
    message: 'Are you looking for something trendy or traditional?',
    trigger: 'occasion-q2-a',
  },
  {
    id: 'occasion-q2-a',
    user: true,
    trigger: 'end',
  },

  {
    id: 'type-q1',
    message: 'What type of jewelry are you interested in today?',
    trigger: 'type-q1-a',
  },
  {
    id: 'type-q1-a',
    user: true,
    trigger: 'type-q2',
  },
  {
    id: 'type-q2',
    message: 'Would you like to explore complete sets or individual pieces?',
    trigger: 'type-q2-a',
  },
  {
    id: 'type-q2-a',
    user: true,
    trigger: 'end',
  },

  {
    id: 'budget-q1',
    message: 'What’s your price range or budget?',
    trigger: 'budget-q1-a',
  },
  {
    id: 'budget-q1-a',
    user: true,
    trigger: 'budget-q2',
  },
  {
    id: 'budget-q2',
    message: 'Looking for high-end, mid-range, or budget-friendly jewelry?',
    trigger: 'budget-q2-a',
  },
  {
    id: 'budget-q2-a',
    user: true,
    trigger: 'end',
  },

  {
    id: 'style-q1',
    message: 'Which material do you prefer?',
    trigger: 'style-q1-a',
  },
  {
    id: 'style-q1-a',
    user: true,
    trigger: 'style-q2',
  },
  {
    id: 'style-q2',
    message: 'Do you prefer handcrafted or machine-made jewelry?',
    trigger: 'style-q2-a',
  },
  {
    id: 'style-q2-a',
    user: true,
    trigger: 'end',
  },

  {
    id: 'end',
    message: 'Thanks for sharing! Based on your answers, we’ll help you find your perfect jewelry ✨',
    end: true,
  },
];

const ChatAssistant = () => (
  <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating />
    </ThemeProvider>
  </div>
);

export default ChatAssistant;