import { type supportedLocales } from '~/services/i18n/i18n.constants';
import type en from '~/services/i18n/locales/en.json';
import { type ArrayValues } from '~/shared/helpers.types';

export type AppLocale = ArrayValues<typeof supportedLocales>;
export type I18nNamespaces = keyof typeof en;
