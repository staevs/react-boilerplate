import * as React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppErrorBoundary } from '~/shared/errors/AppErrorBoundary/AppErrorBoundary';
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
    <BrowserRouter>
      <AppThemeProvider>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
      </AppThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

root.render(app);
