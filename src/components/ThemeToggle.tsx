import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};