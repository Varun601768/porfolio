import React from 'react';
import { GraduationCap, Award, FileCode } from 'lucide-react';

interface AboutProps {
  theme: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ theme }) => {
  return (
    <section 
      id="about" 
      className={`py-20 px-4 sm:px-6 lg:px-8 relative ${
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get to know more about my background, education, and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Software Developer & <span className="text-blue-600">Problem Solver</span>
            </h3>
            
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a versatile software developer with strong foundations in Computer Applications. 
              With my MCA and BCA qualifications, I bring extensive knowledge of multiple programming 
              languages including Java, Python, C, and C++.
            </p>
            
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              My expertise spans across web development technologies like HTML, CSS, JavaScript, PHP, 
              and modern frameworks like React.js and Node.js. I'm also proficient in database management 
              and office productivity tools.
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl z-0 animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl z-0 animate-blob animation-delay-2000"></div>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className="flex items-center mb-2">
                  <GraduationCap className="text-blue-600 mr-2" size={20} />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Master of Computer Applications (MCA)</li>
                  <li>• Bachelor of Computer Applications (BCA)</li>
                </ul>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className="flex items-center mb-2">
                  <FileCode className="text-blue-600 mr-2" size={20} />
                  <h4 className="font-semibold">Core Skills</h4>
                </div>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Multiple Programming Languages</li>
                  <li>• Web Development</li>
                  <li>• Database Management</li>
                  <li>• Office Tools & LaTeX</li>
                </ul>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className={`w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 ${
                theme === 'dark' ? 'border-blue-700' : 'border-blue-300'
              } shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/10`}> 
                <img 
                  src="/varun1.jpeg" 
                  alt="Varun" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 p-6 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              }`}>
                <Award className="text-blue-600" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;