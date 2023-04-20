import { useEffect } from 'react';

import { type Decorator } from '@storybook/react';
import { useAsync } from 'react-use';

import { initI18n } from '~/services/i18n';
import { type AppLocale } from '~/services/i18n/i18n.types';

import { ParamKey } from '../constants';

export const WithI18n: Decorator = (Story, context) => {
  const { globals } = context;
  const locale: AppLocale | undefined = globals[ParamKey.Locale];
  const {
    error,
    loading: isLoading,
    value: i18nInstance
  } = useAsync(() => initI18n(locale));

  useEffect(() => {
    if (locale && i18nInstance && i18nInstance.language !== locale) {
      i18nInstance.changeLanguage(locale).catch((err) => console.error(err));
    }
  }, [locale, i18nInstance]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>i18n loading error: {error.message}</div>;
  }

  return <Story {...context} />;
};
