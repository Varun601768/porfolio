import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Memories from './sections/Memories';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { ThemeType, getInitialTheme, setThemeClass, saveTheme } from './utils/theme';

function App() {
  const [theme, setTheme] = useState<ThemeType>(getInitialTheme());
  const [showResume, setShowResume] = useState(false);  // Manage the visibility of the resume modal

  useEffect(() => {
    setThemeClass(theme);
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleResume = () => {
    setShowResume(!showResume);  // Toggle resume visibility
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
  <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Memories />
      <Contact theme={theme} />
      <Footer theme={theme} />
      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-3/4 h-3/4 overflow-auto">
            <button 
              className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-2"
              onClick={toggleResume}
            >
              X
            </button>
            {/* Resume Content */}
            <h2 className="text-xl mb-4">My Resume</h2>
            <p>Here you can display your resume content, such as:</p>
            <ul>
              <li>Education</li>
              <li>Experience</li>
              <li>Skills</li>
              <li>Contact Info</li>
            </ul>
            {/* Example Download Link */}
            {/* Uncomment and update path to your resume file */}
           <a href="public/resume.pdf" download className="text-blue-500">Download Resume</a> 
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
