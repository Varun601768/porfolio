import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className={`py-12 px-4 sm:px-6 lg:px-8 relative ${
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-blue-500 mb-1">Varun M C</h3>
              <p className="text-gray-400">MCA Graduate</p>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Turning ideas into reality through elegant code and creative problem-solving.
            </p>
            <div className="flex space-x-4">
              {['github', 'linkedin', 'twitter', 'instagram'].map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* Icon would go here */}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'Mobile Development', 
                'UI/UX Design', 
                'Database Design', 
                'API Development'
              ].map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic">
              <p className="text-gray-400 mb-2">Puttur, India</p>
              <p className="text-gray-400 mb-2">varunmcchinthu@gmail.com</p>
              <p className="text-gray-400">+9481601768</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {currentYear} Varun. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;