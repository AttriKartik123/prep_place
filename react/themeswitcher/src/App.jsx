import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

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
