'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Creative() {
  const { t } = useTranslation();

  const categories = [
    {
      key: 'digitalArt',
      titleKey: 'creative.categories.digitalArt.title',
      descKey: 'creative.categories.digitalArt.description',
      link: '/creative/digital-art',
      icon: '🎨',
      gradient: 'from-purple-400 to-pink-600',
      coverImage: '/digital/Snake year cyberpunk.JPG'
    },
    {
      key: 'traditionalArt',
      titleKey: 'creative.categories.traditionalArt.title',
      descKey: 'creative.categories.traditionalArt.description',
      link: '/creative/traditional-art',
      icon: '✏️',
      gradient: 'from-blue-400 to-cyan-600',
      coverImage: '/traditional/traditional-art-cover.jpg'
    },
    {
      key: 'logoDesign',
      titleKey: 'creative.categories.logoDesign.title',
      descKey: 'creative.categories.logoDesign.description',
      link: '/creative/logo-design',
      icon: '🎯',
      gradient: 'from-orange-400 to-red-600',
      coverImage: '/logoDesigns/logo-mascot-design-cover.jpg'
    }
  ];

  return (
    <section id="creative" className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {t('creative.title')} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('creative.portfolio')}</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            {t('creative.subtitle')}
          </p>
          <p className="text-lg text-gray-500 text-center mb-16">
            {t('creative.exploreGalleries')}
          </p>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-48 ${category.coverImage ? 'relative overflow-hidden' : `bg-gradient-to-br ${category.gradient}`} flex items-center justify-center`}>
                  {category.coverImage ? (
                    <img
                      src={category.coverImage}
                      alt={t(category.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t(category.titleKey)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(category.descKey)}
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                    {t('creative.viewGallery')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Character Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('creative.charactersSection.title')}
              </h3>
              <p className="text-lg text-gray-600">
                {t('creative.charactersSection.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { key: 'moby', gradient: 'from-yellow-400 to-orange-500', emoji: '🐦', image: '/characters/moby/moby-portrait.jpg', imagePosition: 'object-center' },
                { key: 'xiya', gradient: 'from-pink-400 to-purple-500', emoji: '👧', image: '/characters/xiya/Xiya-portrait.JPG', imagePosition: 'object-top' },
                { key: 'yuriy', gradient: 'from-blue-400 to-cyan-500', emoji: '👦', image: '/characters/yuriy/Yuriy cover.JPG', imagePosition: 'object-top' },
                { key: 'loop', gradient: 'from-green-400 to-teal-500', emoji: '🤖', image: '/characters/loop/loop-portrait.jpg', imagePosition: 'object-top' }
              ].map((character) => (
                <Link
                  key={character.key}
                  href={`/characters#${character.key}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`h-40 ${character.image ? 'relative overflow-hidden' : `bg-gradient-to-br ${character.gradient}`} flex items-center justify-center`}>
                    {character.image ? (
                      <img
                        src={character.image}
                        alt={t(`creative.charactersSection.${character.key}.name`)}
                        className={`w-full h-full object-cover ${character.imagePosition || 'object-top'} group-hover:scale-110 transition-transform duration-300`}
                      />
                    ) : (
                      <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                        {character.emoji}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {t(`creative.charactersSection.${character.key}.name`)}
                    </h4>
                    <p className="text-sm text-purple-600 mb-2">
                      {t(`creative.charactersSection.${character.key}.role`)}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {t(`creative.charactersSection.${character.key}.preview`)}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700">
                      {t('creative.charactersSection.learnMore')}
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border-2 border-purple-200">
              <p className="text-lg text-gray-700 mb-4">
                {t('creative.moreOnInstagram')}
              </p>
              <a
                href="https://www.instagram.com/osprey.mobius"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @osprey.mobius
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
