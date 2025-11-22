'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Get current language from i18n
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setCurrentLang(lang);
  };

  return (
    <nav className="bg-[#4e586b] fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-[#cec1d9]">Ruiyang Wang</span>
        </Link>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#cec1d9] focus:outline-none focus:ring-2 focus:ring-[#cec1d9] p-2 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Language dropdown */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="relative">
            <select
              className="block appearance-none bg-[#4e586b] text-[#cec1d9] border border-gray-300 hover:border-gray-400 px-3 py-2 pr-8 rounded-md shadow-sm text-sm focus:outline-none focus:ring focus:border-blue-300"
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>

        <div className={`w-full md:flex md:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-[#cec1d9]">
            <li><Link href="/" className="block py-2 px-3 hover:text-white">{t('nav.work')}</Link></li>
            <li><Link href="/about" className="block py-2 px-3 hover:text-white">{t('nav.about')}</Link></li>
            <li><Link href="/contact" className="block py-2 px-3 hover:text-white">{t('nav.contact')}</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
