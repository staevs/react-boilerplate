import { type Decorator } from '@storybook/react';

import { AppThemeProvider } from '~/shared/theme/AppThemeProvider';

export const WithTheme: Decorator = (Story, context) => (
  <AppThemeProvider>
    <Story {...context} />
  </AppThemeProvider>
);
