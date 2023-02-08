import 'i18next';
import type en from '~/services/i18n/locales/en.json';

declare module 'i18next' {
  type EnglishResource = typeof en;

  interface CustomTypeOptions {
    resources: EnglishResource;
  }
}
