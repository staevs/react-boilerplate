import { type DecoratorFn } from '@storybook/react';

import { AppThemeProvider } from '~/shared/theme/AppThemeProvider';

export const WithTheme: DecoratorFn = (Story, context) => (
  <AppThemeProvider>
    <Story {...context} />
  </AppThemeProvider>
);
