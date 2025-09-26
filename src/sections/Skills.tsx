import React, { useState } from 'react';
import { Code, Database, Layout, FileText } from 'lucide-react';

interface SkillsProps {
  theme: 'light' | 'dark';
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState('programming');
  
  const categories: SkillCategory[] = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C', level: 75 },
        { name: 'C++', level: 75 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Layout />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'PHP', level: 75 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'MS Access', level: 80 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Software',
      icon: <FileText />,
      skills: [
        { name: 'MS Word', level: 90 },
        { name: 'MS Excel', level: 85 },
        { name: 'LaTeX', level: 80 },
        { name: 'Git', level: 75 },
        { name: 'VS Code', level: 85 },
      ],
    },
  ];
  
  const activeSkills = categories.find(cat => cat.id === activeCategory)?.skills || [];
  
  return (
    <section 
      id="skills" 
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
            My <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive overview of my technical abilities and expertise across various domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className={`rounded-lg overflow-hidden shadow-lg ${
              theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800/80' : 'bg-gradient-to-br from-blue-100 via-white to-blue-300/80'
            } backdrop-blur-lg border border-blue-300 shadow-2xl transform hover:scale-105 transition-transform duration-500`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <nav className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : theme === 'dark' 
                            ? 'hover:bg-gray-700 text-gray-300'
                            : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-3">{category.icon}</span>
                      <span>{category.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className={`rounded-lg shadow-lg p-6 ${
              theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800/80' : 'bg-gradient-to-br from-blue-100 via-white to-blue-300/80'
            } backdrop-blur-lg border border-blue-300 shadow-2xl transform hover:scale-105 transition-transform duration-500`}>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-3">
                  {categories.find(cat => cat.id === activeCategory)?.icon}
                </span>
                <span>{categories.find(cat => cat.id === activeCategory)?.title}</span>
              </h3>
              
              <div className="space-y-6">
                {activeSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className={`rounded-lg shadow-lg p-5 ${
                theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800/80' : 'bg-gradient-to-br from-blue-100 via-white to-blue-300/80'
              } backdrop-blur-lg border border-blue-300 shadow-2xl transform hover:scale-105 transition-transform duration-500`}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Code />
                </div>
                <h4 className="text-lg font-semibold mb-2">Programming</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Java, Python, C, C++, JavaScript
                </p>
              </div>
              
              <div className={`rounded-lg shadow-lg p-5 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Layout />
                </div>
                <h4 className="text-lg font-semibold mb-2">Web Development</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  HTML, CSS, PHP, React.js, Node.js
                </p>
              </div>
              
              <div className={`rounded-lg shadow-lg p-5 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <FileText />
                </div>
                <h4 className="text-lg font-semibold mb-2">Office Tools</h4>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  MS Word, Excel, Access, LaTeX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;