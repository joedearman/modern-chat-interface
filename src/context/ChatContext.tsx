import React, { createContext, useContext, useState, useEffect } from 'react';
import config from '../config/env.json';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (content: string) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
  retry: () => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chat-messages');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [retryMessage, setRetryMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);
      setRetryMessage(content);

      const userMessage: Message = { role: 'user', content, timestamp: new Date() };
      setMessages(prev => [...prev, userMessage]);

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: config.OPENAI_MODEL,
          messages: messages.map(({ role, content }) => ({ role, content })),
          max_tokens: config.MAX_TOKENS,
          temperature: config.TEMPERATURE
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setRetryMessage(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  const retry = async () => {
    if (retryMessage) {
      await sendMessage(retryMessage);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isLoading, error, retry }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
};