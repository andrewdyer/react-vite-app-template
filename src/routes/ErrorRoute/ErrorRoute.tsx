import { isRouteErrorResponse, useRouteError } from 'react-router';

import { ErrorPage, NotFoundPage } from '@/components/pages';

/**
 * Handles the URL and navigation for the error screen, used as a route's error boundary.
 *
 * @remarks
 * A thrown 404 response, such as one from a loader that finds no record, shows the not-found
 * screen. Any other error shows the error screen.
 */
const ErrorRoute = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  return <ErrorPage />;
};

export default ErrorRoute;
