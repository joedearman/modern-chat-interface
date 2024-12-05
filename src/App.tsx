import React from 'react';
import ChatInterface from './components/ChatInterface';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ChatInterface />
    </ThemeProvider>
  );
}

export default App;