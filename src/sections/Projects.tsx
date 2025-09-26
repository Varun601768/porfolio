// src/components/Projects.tsx

import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
     {
      id: 11,
      title: 'Cryptocurrency Price Prediction',
      description: 'A deep learning model that predicts cryptocurrency prices based on historical data.',
      image: '/p1.png',
      tags: ['Python', 'Pandas', 'Numpy','deep Learning','yfinance'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/CrytpoWallet',
      category: 'backend',
    },
    {
      id: 12,
      title: 'Government Hospital Portal',
      description: 'A web application for managing patient records and appointments in government hospitals.',
      image: '/image.png',
      tags: ['React js', 'Node js', 'Express js','MongoDB'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/Goverment-Hospital-Portal',
      category: 'backend',
    },
    
    
    {
      id: 1,
      title: 'Asthma Classification',
      description: 'A machine learning model that classifies asthma severity based on patient data.',
      image: '/a.png',
      tags: ['Python', 'Scikit-learn', 'Machine Learning'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/Asthama-Classification',
      category: 'backend',
    },
    {
      id: 2,
      title: 'Color Detection',
      description: 'A computer vision app that identifies and names the dominant colors in an image.',
      image: '/3.png',
      tags: ['OpenCV', 'Python', 'Computer Vision'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/Colors',
      category: 'backend',
    },
    {
      id: 3,
      title: 'Food Waste Management System',
      description: 'A full-stack platform to track and redistribute surplus food to charities.',
      image: '/4.png',
      tags: ['Php', 'HTML', 'CSS', 'Javacript'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/foodwaste',
      category: 'Web based',
    },
    {
      id: 4,
      title: 'Bank Management System',
      description: 'A secure banking application supporting account creation, withdrawal, deposit, and transfers.',
      image: '/5.png',
      tags: ['Java', 'Swing', 'SQLite'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/Banking-System',
      category: 'GUI',
    },
    {
      id: 5,
      title: 'Campus Placement Salary Prediction',
      description: 'A ML model predicting campus placement salaries using historical placement data.',
      image: '/6.png',
      tags: ['Python', 'Pandas', 'Machine Learning'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/Campus-Placement',
      category: 'backend',
    },
    {
      id: 6,
      title: 'Smart Parking',
      description: 'An IoT-enabled system that detects parking occupancy and guides vehicles to empty spots.',
      image: '/7.jpeg',
      tags: ['IoT', 'Arduino'],
      demoLink: '#',
      codeLink: '#',
      category: 'IOT',
    },
    {
      id: 7,
      title: 'News Article Classification',
      description: 'A Natural Language Processing model that categorizes news articles by topic.',
      image: '/8.png',
      tags: ['Python', 'NLTK', 'Machine Learning'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/news_article_classification',
      category: 'backend',
    },
    {
      id: 8,
      title: 'Human Emotion Detection',
      description: 'A deep learning solution that recognizes human emotions from facial expressions.',
      image: '/9.png',
      tags: ['TensorFlow', 'Keras', 'Computer Vision'],
      demoLink: '#',
      codeLink: '#',
      category: 'backend',
    },
    {
      id: 9,
      title: 'Travel Booking System',
      description: 'A comprehensive travel portal for searching, booking flights and hotels with reviews.',
      image: '/10.png',
      tags: ['Php', 'Javascript', 'css','Html'],
      demoLink: '#',
      codeLink: 'https://github.com/Varun601768/Travel',
      category: 'Web based',
    },
  {
    id: 10,
    title: 'Hotel Booking System',
    description: 'A comprehensive Rooms for searching hotels with reviews.',
    image: '/11.png',
    tags: ['Php', 'Javascript', 'css','Html'],
    demoLink: '#',
    codeLink: 'https://github.com/Varun601768/Hotel-Book',
    category: 'Web based'
  },
  
];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'Web based', label: 'Web based' },
  ];
  

  const filteredProjects =
    filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A showcase of my recent work, personal projects, and contributions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === f.id
                  ? 'bg-blue-600 text-white'
                  : theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full ${
                        theme === 'dark'
                          ? 'bg-gray-600 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    } transition-colors`}
                  >
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Code size={18} className="mr-2" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
