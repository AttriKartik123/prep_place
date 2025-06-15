import React, { useEffect, useState, createContext, useContext } from 'react';

// ThemeContext.js content (now integrated)
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}

// ThemeBtn.js content (now integrated)
function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer rounded-full">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle Theme</span>
    </label>
  );
}

// Card.js content (now integrated)
function Card() {
  const { themeMode } = useTheme(); // Access themeMode

  // Dynamically set card background and border classes based on themeMode
  const cardBgClass = themeMode === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardBorderClass = themeMode === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const textColorClass = themeMode === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className={`w-full border rounded-lg shadow font-inter ${cardBgClass} ${cardBorderClass}`}>
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full h-auto object-cover"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="product_image1"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found';"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className={`text-xl font-semibold tracking-tight mb-2 ${textColorClass}`}>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Star Icons - repeated for 4 full stars and 1 empty star */}
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-3xl font-bold ${textColorClass}`}>$599</span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

// App.js main component
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {/* Tailwind CSS Script for Just-in-Time Compilation */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
          }
          .light {
            background-color: #f3f4f6; /* Light gray background for light theme */
            color: #1f2937; /* Dark text for light theme */
          }
          .dark {
            background-color: #1f2937; /* Dark background for dark theme */
            color: #f3f4f6; /* Light text for dark theme */
          }
        `}
      </style>

      <div className="flex flex-wrap min-h-screen items-center justify-center p-4">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
