'use client';

import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Characters() {
  const { t } = useTranslation();

  useEffect(() => {
    // Smooth scroll to character section if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100; // 100px offset from top
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  const characters = [
    {
      key: 'moby',
      emoji: '🐦',
      gradient: 'from-yellow-400 to-orange-500',
      portrait: '/characters/moby/moby-portrait.jpg',
      imagePosition: 'object-center',
      conceptArt: [
        '/characters/moby/Moby1.JPG',
        '/characters/moby/Moby2.JPG',
        '/characters/moby/Moby3.PNG'
      ]
    },
    {
      key: 'xiya',
      emoji: '👧',
      gradient: 'from-pink-400 to-purple-500',
      portrait: '/characters/xiya/Xiya-portrait.JPG',
      imagePosition: 'object-top',
      conceptArt: [
        '/characters/xiya/xiya1.PNG',
        '/characters/xiya/xiya2.JPG',
        '/characters/xiya/Xiya3.png'
      ]
    },
    {
      key: 'yuriy',
      emoji: '👦',
      gradient: 'from-blue-400 to-cyan-500',
      portrait: '/characters/yuriy/yuriy-protrait.JPG',
      imagePosition: 'object-top',
      conceptArt: [
        '/characters/yuriy/Yuriy1.PNG',
        '/characters/yuriy/yuriy2.jpg',
        '/characters/yuriy/Yuriy3.png'
      ]
    },
    {
      key: 'loop',
      emoji: '🤖',
      gradient: 'from-green-400 to-teal-500',
      portrait: '/characters/loop/loop-portrait.jpg',
      imagePosition: 'object-top',
      conceptArt: [
        '/characters/loop/loop1.JPG',
        '/characters/loop/loop2GIF.GIF',
        '/characters/loop/loop3.PNG'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-fadeIn">
            {/* Header */}
            <div className="mb-12 text-center">
              <Link
                href="/#creative"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('creative.backToCreative')}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('creative.charactersSection.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('creative.charactersSection.subtitle')}
              </p>
            </div>

            {/* Characters */}
            <div className="space-y-16">
              {characters.map((character, index) => (
                <div
                  id={character.key}
                  key={character.key}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}
                >
                  {/* Character Image/Icon */}
                  <div className={`lg:w-1/3 h-64 lg:h-auto ${character.portrait ? 'relative overflow-hidden' : `bg-gradient-to-br ${character.gradient}`} flex items-center justify-center`}>
                    {character.portrait ? (
                      <img
                        src={character.portrait}
                        alt={t(`creative.charactersSection.${character.key}.name`)}
                        className={`w-full h-full object-cover ${character.imagePosition || 'object-top'}`}
                      />
                    ) : (
                      <div className="text-9xl">
                        {character.emoji}
                      </div>
                    )}
                  </div>

                  {/* Character Info */}
                  <div className="lg:w-2/3 p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {t(`creative.charactersSection.${character.key}.name`)}
                    </h2>
                    <p className="text-lg text-purple-600 mb-4">
                      {t(`creative.charactersSection.${character.key}.role`)}
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                      {t(`creative.charactersSection.${character.key}.bio`)}
                    </p>

                    {/* Traits */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">CHARACTER TRAITS</h3>
                      <div className="flex flex-wrap gap-2">
                        {t(`creative.charactersSection.${character.key}.traits`).split('|').map((trait, i) => (
                          <span key={i} className={`px-4 py-2 bg-gradient-to-r ${character.gradient} text-white rounded-full text-sm font-medium`}>
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Concept Art */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">CONCEPT ART</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {character.conceptArt && character.conceptArt.length > 0 ? (
                          character.conceptArt.map((artPath, i) => (
                            <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                              <img
                                src={artPath}
                                alt={`${t(`creative.charactersSection.${character.key}.name`)} concept art ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))
                        ) : (
                          [1, 2, 3].map((i) => (
                            <div key={i} className={`aspect-square bg-gradient-to-br ${character.gradient} opacity-20 rounded-lg flex items-center justify-center`}>
                              <span className="text-white text-xs">[Concept Art {i}]</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
