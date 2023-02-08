import i18nBase from 'i18next';
import { initReactI18next } from 'react-i18next';

import { type AppLocale, type I18nNamespaces } from './i18n.types';
import en from './locales/en.json';

const namespaces = Object.keys(en);

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
  await i18nBase.init({
    fallbackLng: ['en'],
    partialBundledLanguages: true,
    lng: initialLng || 'en',
    resources: {
      en
    },

    ns: namespaces,
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
