'use client';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 mb-4">{t('footer.copyright')}</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Ruiyang1210W" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ruiyang-wang-7a610823a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/ospreymobius" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="https://www.instagram.com/osprey.mobius" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
