import React, { useState, createContext, useContext, useEffect } from 'react';
import { Phone, ShoppingCart, ChevronDown, Globe, Sun, Moon, Search } from 'lucide-react';

// Theme Context
const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const TravelloPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { title: 'Home', hasDropdown: true, active: true },
    { title: 'Tours', hasDropdown: true },
    { title: 'Hotels', hasDropdown: true },
    { title: 'Transports', hasDropdown: true },
    { title: 'Restaurants', hasDropdown: true },
    { title: 'Pages', hasDropdown: true },
  ];

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header*/}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top */}
        <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xs text-gray-700 dark:text-gray-300">
              Call Anytime<br />
              00 (888) +123456
            </div>
            
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Travello
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span>English</span>
                <span className="mx-2">|</span>
                <button className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500">
                  Sign Up
                </button>
              </div>
              
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="bg-white dark:bg-gray-900 shadow-sm py-3 px-4 md:px-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-between items-center mb-2">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button 
                    className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 ${
                      item.active ? 'text-teal-600 dark:text-teal-500' : ''
                    }`}
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                  </button>
                  
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                          Option 1
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                          Option 2
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                          Option 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search bar */}
            <div className="w-full md:w-auto">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Destination_Attraction"
                  className="w-full pl-4 pr-20 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                  Ctrl + K
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button 
                    className={`w-full flex justify-between items-center px-4 py-3 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 ${
                      item.active ? 'text-teal-600 dark:text-teal-500' : ''
                    }`}
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                  
                  {item.hasDropdown && activeDropdown === item.title && (
                    <div className="bg-gray-50 dark:bg-gray-900">
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 dark:text-gray-300">
                        Option 1
                      </a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 dark:text-gray-300">
                        Option 2
                      </a>
                      <a href="#" className="block px-8 py-2 text-sm text-gray-700 dark:text-gray-300">
                        Option 3
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      
      <main className="pt-32">
      </main>
    </div>
  );
};

const Page1 = () => {
  return (
    <ThemeProvider>
      <TravelloPage />
    </ThemeProvider>
  );
};

export default Page1;