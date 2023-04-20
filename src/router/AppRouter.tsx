import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterErrorBoundary } from './RouterErrorBoundary/RouterErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Home')
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
