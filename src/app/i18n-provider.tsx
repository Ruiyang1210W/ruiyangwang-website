'use client';

import { ReactNode, useEffect } from 'react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

type Props = {
  children: ReactNode;
};

export default function TranslationProvider({ children }: Props) {
  useEffect(() => {
    const lang = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(lang);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

