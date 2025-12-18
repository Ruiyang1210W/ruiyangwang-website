'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Technical() {
  const { t } = useTranslation();
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skills = [
    { name: 'JavaScript/React', level: 80, icon: '⚛️', key: 'technical.skills.react' },
    { name: 'Python', level: 90, icon: '🐍', key: 'technical.skills.python' },
    { name: 'Java', level: 85, icon: '☕', key: 'technical.skills.java' },
    { name: 'C', level: 75, icon: '💻', key: 'technical.skills.c' },
    { name: 'HTML/CSS', level: 85, icon: '🎨', key: 'technical.skills.htmlcss' },
    { name: 'Data Analysis', level: 80, icon: '📊', key: 'technical.skills.data' },
    { name: 'Machine Learning', level: 78, icon: '🤖', key: 'technical.skills.ml' },
    { name: 'Web Development', level: 88, icon: '🌐', key: 'technical.skills.web' },
  ];

  const projects = [
    {
      titleKey: 'technical.projects.project1.title',
      descKey: 'technical.projects.project1.desc',
      tags: ['Python', 'PyTorch', 'MPI', 'Deep Learning'],
      link: 'https://github.com/Ruiyang1210W/Vertical-Partition-For-Anomaly-Detection-Using-Machine-Learning',
      color: 'text-blue-700',
      image: '/projectPictures/AnomalyDectionForCybersecurity.png'
    },
    {
      titleKey: 'technical.projects.project2.title',
      descKey: 'technical.projects.project2.desc',
      tags: ['Android', 'Kotlin', 'Mobile App', 'Firebase'],
      link: 'https://github.com/Solares10/FutureScript',
      color: 'text-pink-600',
      image: '/projectPictures/FutureScriptTimeCapsuleApp.png'
    },
    {
      titleKey: 'technical.projects.project3.title',
      descKey: 'technical.projects.project3.desc',
      tags: ['Python', 'LoRA', 'FastAPI', 'Model Training'],
      link: 'https://github.com/Ruiyang1210W/genz-slang-explainer',
      color: 'text-teal-600',
      image: '/projectPictures/GenZSlangExplainer.png'
    },
    {
      titleKey: 'technical.projects.project4.title',
      descKey: 'technical.projects.project4.desc',
      tags: ['Flask', 'Python', 'Web Development', 'QR Code'],
      link: 'https://qr-code-generator-cssa.onrender.com/',
      color: 'text-yellow-600',
      image: '/projectPictures/QRCodeEventManagementSystem.png'
    },
    {
      titleKey: 'technical.projects.project5.title',
      descKey: 'technical.projects.project5.desc',
      tags: ['Java', 'OpenAI API', 'JUnit', 'Swing'],
      link: 'https://github.com/Ruiyang1210W/Intelligent-Writing-Assistant',
      color: 'text-indigo-600',
      image: '/projectPictures/IntelligentWritingAssistant.png'
    },
    {
      titleKey: 'technical.projects.project6.title',
      descKey: 'technical.projects.project6.desc',
      tags: ['Java', 'OOP', 'Game Dev', '2D Graphics'],
      link: 'https://github.com/Ruiyang1210W/Jump-and-Run',
      color: 'text-orange-500',
      image: '/projectPictures/MobyJumpAndRun.png'
    },
    {
      titleKey: 'technical.projects.project7.title',
      descKey: 'technical.projects.project7.desc',
      tags: ['Next.js', 'React', 'Full-Stack', 'TypeScript'],
      link: 'https://github.com/GuyWhoCode/Artistic-Alley',
      color: 'text-red-600',
      image: '/projectPictures/ArtisticAlleyCommissionMarketplace.png'
    },
    {
      titleKey: 'technical.projects.project8.title',
      descKey: 'technical.projects.project8.desc',
      tags: ['Unity', 'C#', '3D Game', 'Game Dev'],
      link: 'https://lfer58.itch.io/neon-navigator',
      color: 'text-purple-600',
      image: '/projectPictures/NeonNavigator.png'
    }
  ];

  return (
    <section id="technical" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {t('technical.title')} <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{t('technical.background')}</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {t('technical.subtitle')}
          </p>

          {/* Skills */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">{t('technical.skillsTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-900">{t(skill.key)}</span>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">{t('technical.projectsTitle')}</h3>
            <div className="relative">
              {/* Gradient fade on edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

              {/* Scrollable container */}
              <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
                {projects.map((project, index) => (
                  <div key={index} className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer snap-start">
                    {/* Project Thumbnail */}
                    <div className="w-full h-48 overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={t(project.titleKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h4 className={`text-xl font-semibold mb-3 ${project.color}`}>{t(project.titleKey)}</h4>
                      <p className={`text-gray-600 mb-2 text-sm transition-all duration-300 ${expandedProjects[index] ? '' : 'line-clamp-3'}`}>
                        {t(project.descKey)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpand(index);
                        }}
                        className="text-purple-600 hover:text-purple-700 text-xs font-medium mb-3 flex items-center gap-1"
                      >
                        {expandedProjects[index] ? (
                          <>
                            Read less <span className="text-[10px]">↑</span>
                          </>
                        ) : (
                          <>
                            Read more <span className="text-[10px]">↓</span>
                          </>
                        )}
                      </button>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        {t('technical.viewProject')} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
