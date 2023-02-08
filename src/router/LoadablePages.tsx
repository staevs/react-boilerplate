import React from 'react';

export const LoadableHome = React.lazy(() =>
  import('~/pages/Home').then(({ Home: element }) => ({
    default: element
  }))
);
