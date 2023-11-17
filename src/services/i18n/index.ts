import i18nBase from 'i18next';
import { initReactI18next } from 'react-i18next';

import { type AppLocale, type I18nNamespaces } from './i18n.types';
import type en from './locales/en.json';

i18nBase.use(initReactI18next).use({
  type: 'backend',
  async read(
    language: AppLocale,
    namespace: I18nNamespaces,
    callback: (
      errorValue: unknown,
      translations: (typeof en)[I18nNamespaces] | null
    ) => void
  ) {
    try {
      const resources = (await import(
        `./locales/${language}.json`
      )) as typeof en;

      callback(null, resources[namespace]);
    } catch (error) {
      callback(error, null);
    }
  }
});

export const initI18n = async (initialLng?: AppLocale) => {
  const enResource = (await import('./locales/en.json')) as typeof en;

  await i18nBase.init({
    fallbackLng: ['en'],
    partialBundledLanguages: true,
    lng: initialLng || 'en',
    resources: {
      en: enResource
    },

    ns: Object.keys(enResource),
    defaultNS: 'translations',

    interpolation: {
      // not needed for react!
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

  return i18nBase;
};
