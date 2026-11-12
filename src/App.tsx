import type { RouteObject } from 'react-router';

import { ErrorLayout, MainLayout } from '@/layouts';
import { ErrorRoute, HomeRoute, NotFoundRoute } from '@/routes';

/**
 * The application's route table, nesting each screen's route inside the shared main layout.
 *
 * @remarks
 * Screens sit in a pathless route with its own error boundary, so an error in a screen is shown
 * inside the layout. The root route's error boundary is a fallback for errors in the layout itself,
 * and renders its own main landmark because the layout's markup is gone.
 * Any URL that matches no screen shows the not-found screen.
 */
const routes: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    ErrorBoundary: ErrorLayout,
    children: [
      {
        ErrorBoundary: ErrorRoute,
        children: [
          { index: true, Component: HomeRoute },
          { path: '*', Component: NotFoundRoute },
        ],
      },
    ],
  },
];

export default routes;
