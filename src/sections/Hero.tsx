import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  theme: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white' 
          : 'bg-gradient-to-br from-blue-100 via-white to-blue-300 text-gray-900'
      }`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(8px)',
        borderRadius: '24px',
        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {theme === 'dark' && (
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          )}
          {theme === 'dark' && (
            <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          )}
          {theme === 'dark' && (
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          )}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-blue-600 font-medium text-lg mb-3 animate-fadeIn">Hello, I'm</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-slideUp">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">Varun M C</span>
        </h1>
        
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 animate-slideUp animation-delay-300 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Software Developer & MCA Graduate
        </h2>
        
        <p className={`text-lg max-w-2xl mx-auto mb-8 animate-slideUp animation-delay-600 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Crafting elegant solutions to complex problems through code.
          Passionate about creating impactful software experiences.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12 animate-fadeIn animation-delay-900">
  <a 
    href="https://github.com/varun601768" 
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white hover:bg-gray-700' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    } transition-colors duration-200`}
    aria-label="GitHub"
  >
    <Github size={20} />
  </a>
  
  <a 
    href="https://linkedin.com/in/varun-m-c-27871b321" 
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white hover:bg-gray-700' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    } transition-colors duration-200`}
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>
  
  <a 
    href="#contact" 
    className={`p-3 rounded-full ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white hover:bg-gray-700' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    } transition-colors duration-200`}
    aria-label="Email"
  >
    <Mail size={20} />
  </a>
</div>

        
        <div className="flex justify-center space-x-4 animate-fadeIn animation-delay-1200">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className={`px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl ${
              theme === 'dark' 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            } transition-colors`}
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout} 
          className={`p-2 rounded-full ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          } transition-colors`}
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;