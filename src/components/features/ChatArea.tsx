import React from 'react';
import { useChat } from '../../context/ChatContext';
import { ChatMessage } from './ChatMessage';

export const ChatArea = () => {
  const { messages, isTyping } = useChat();

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message) => (
        <ChatMessage key={message.id} {...message} />
      ))}
      {isTyping && (
        <div className="flex gap-2 p-4 bg-gray-50 dark:bg-gray-800">
          <div className="animate-bounce">•</div>
          <div className="animate-bounce delay-100">•</div>
          <div className="animate-bounce delay-200">•</div>
        </div>
      )}
    </div>
  );
};