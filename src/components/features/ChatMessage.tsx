import React from 'react';
import { User, Bot } from 'lucide-react';

type ChatMessageProps = {
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

export const ChatMessage = ({ content, role, timestamp }: ChatMessageProps) => (
  <div className={`flex gap-4 p-4 ${role === 'assistant' ? 'bg-gray-50 dark:bg-gray-800' : ''}`}>
    <div className="flex-shrink-0">
      {role === 'user' ? (
        <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
      ) : (
        <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      )}
    </div>
    <div className="flex-1">
      <p className="text-gray-900 dark:text-gray-100">{content}</p>
      <time className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {timestamp.toLocaleTimeString()}
      </time>
    </div>
  </div>
);