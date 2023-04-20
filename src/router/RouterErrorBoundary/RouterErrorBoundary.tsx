import { useRouteError } from 'react-router-dom';

import { ErrorFallback } from './ErrorFallback';

export const RouterErrorBoundary = () => {
  const error = useRouteError() as Error;

  return <ErrorFallback error={error} />;
};
