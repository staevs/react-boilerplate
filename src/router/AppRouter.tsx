import { Suspense } from 'react';

import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { LoadableHome } from '~/router/LoadablePages';

export const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading page</div>}>
          <LoadableHome />
        </Suspense>
      }
    />
  </Routes>
);
