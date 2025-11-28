'use client';

import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background - Desktop only */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/background/desktop-backup-BG.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/background/XiyaYuriyBg.mp4" type="video/mp4" />
        <source src="/background/XiyaYuriyBg.webm" type="video/webm" />
      </video>

      {/* Mobile Backgrounds - Static backup + GIF overlay */}
      {/* Backup static image - shows while GIF loads or if GIF fails */}
      <div
        className="absolute inset-0 w-full h-full bg-cover md:hidden"
        style={{
          backgroundImage: "url('/background/mobile-backup-BG.jpg')",
          backgroundPosition: 'center'
        }}
      ></div>

      {/* GIF Background - Mobile only - loads on top of backup */}
      <div
        className="absolute inset-0 w-full h-full bg-cover md:hidden"
        style={{
          backgroundImage: "url('/background/mobileBG.GIF')",
          backgroundPosition: '17% center'
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('hero.hi')} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('hero.name')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {t('hero.tagline')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('technical')}
              className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-cyan-500/50"
            >
              {t('hero.viewTechnical')}
            </button>
            <button
              onClick={() => scrollToSection('creative')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors backdrop-blur-sm"
            >
              {t('hero.exploreCreative')}
            </button>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
