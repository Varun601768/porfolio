import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'memories', label: 'Memories' },
  { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const toggleResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowResume(!showResume);
  };

  const toggleCertificate = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCertificate(!showCertificate);
  };

  const certificates = [
    {
      title: 'Intership',
      file: '/c2.jpeg',
    },
    {
      title: 'Privacy and Security in Social Media',
      file: '/c1.png',
    },
    {
      title: 'Web design',
      file: '/c3.jpeg',
    },
    // Add more certificates here
    {
      title: 'Project Omega(Hackthon)',
      file: '/c4.jpeg',
    },
    // Add more certificates here
    {
      title: 'IEE I2connect(Smark Parking)',
      file: '/c5.jpeg',
    },
    {
      title: 'Drishti Conference (Paper Publication)',
      file: '/c7.jpeg',
    },
     {
      title: 'Code A Thon (Hackthon)',
      file: '/c8.jpeg',
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 
      (theme === 'dark' 
        ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800/95 backdrop-blur-lg shadow-2xl' 
        : 'bg-gradient-to-r from-blue-100 via-white to-blue-300/95 backdrop-blur-lg shadow-2xl') 
      : 'bg-transparent'}`}
      style={{
        boxShadow: isScrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)' : undefined,
        borderRadius: isScrolled ? '16px' : undefined,
        border: isScrolled ? (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)') : undefined
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Varun M C</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`${
                    activeSection === link.id
                      ? 'text-blue-600 font-medium'
                      : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                  } transition-colors px-2 py-1 text-sm rounded-md relative`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom-right"></span>
                  )}
                </button>
              ))}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              {/* Resume Button */}
              <button
                onClick={toggleResume}
                className={`${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } transition-colors px-2 py-1 text-sm rounded-md`}
              >
                Resume
              </button>

              {/* Certificate Button */}
              <button
                onClick={toggleCertificate}
                className={`${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } transition-colors px-2 py-1 text-sm rounded-md`}
              >
                Certificates
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:text-blue-600 focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`${
                  activeSection === link.id
                    ? 'bg-blue-600 text-white'
                    : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-3/4 h-3/4 overflow-auto relative">
            <button 
              className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-2"
              onClick={toggleResume}
            >
              X
            </button>
            <h2 className="text-xl mb-4">My Resume</h2>
            <iframe
              src="/resume.pdf"
              width="100%"
              height="600"
              className="border-none"
              title="Resume"
            />
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 max-h-[90vh] overflow-auto relative">
            <button 
              className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-red-600 rounded-full p-2"
              onClick={toggleCertificate}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">My Certificates</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certificates.map((cert, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => window.open(cert.file, '_blank')}
                  />
                  <div className="p-2 text-center font-medium text-gray-800">{cert.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
