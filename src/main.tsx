import * as React from 'react';

import ReactDOM from 'react-dom/client';

import { AppThemeProvider } from '~/shared/theme/AppThemeProvider';

import { App } from './App';

console.debug(
  `[App] Version: %c${import.meta.env.VITE_APP_VERSION}`,
  'color:#EF4523; font-weight:bold'
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const app = (
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);

root.render(app);
