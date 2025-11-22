'use client';

import Navbar from '@/components/navbar';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              {t('about.title')} <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{t('about.me')}</span>
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.backgroundTitle')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('about.backgroundText1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.backgroundText2')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('about.educationTitle')}</h2>

              {/* CPP Education */}
              <div className="space-y-6 mb-8 pb-8 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-medium text-purple-600">{t('about.universityName')}</h3>
                  <p className="text-gray-600 mb-4">{t('about.degree')}</p>

                  <h4 className="text-lg font-medium text-gray-900 mb-3">{t('about.courseworkTitle')}</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t('about.coursework').split('|').map((course, index) => (
                      <span key={index} className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200">
                        {course}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-medium text-gray-900 mb-2">{t('about.achievementsTitle')}</h4>
                  <p className="text-gray-700 bg-purple-50 px-4 py-3 rounded-lg border border-purple-200 inline-block">
                    🏆 {t('about.achievements')}
                  </p>
                </div>
              </div>

              {/* MIT Education */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-purple-600">{t('about.mitName')}</h3>
                  <p className="text-gray-600 mb-4">{t('about.mitProgram')}</p>

                  <a
                    href="/certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('about.viewCertificate')}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.interestsTitle')}</h2>
              <div className="flex flex-wrap gap-3">
                 <span className="px-4 py-2 bg-orange-100 text-red-700 rounded-full">Artificial Intelligence</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">Digital & Traditional Art</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Character & Logo Design</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full">Software Development</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">Machine Learning</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full">Music</span>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/"
                className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                {t('about.backToHome')}
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
