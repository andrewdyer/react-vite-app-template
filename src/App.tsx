import type { RouteObject } from 'react-router';

import { ErrorLayout, MainLayout } from '@/layouts';
import { ErrorRoute } from '@/routes';

/**
 * The application's route table, nesting each screen's route inside the shared main layout.
 *
 * @remarks
 * Screens sit in a pathless route with its own error boundary, so an error in a screen is shown
 * inside the layout. The root route's error boundary is a fallback for errors in the layout itself,
 * and renders its own main landmark because the layout's markup is gone.
 * Any URL that matches no screen shows the not-found screen.
 *
 * Each screen's route is lazy-loaded, so its code is split into its own chunk and downloaded the
 * first time the screen is visited. Layouts and error boundaries load with the application,
 * because they are needed before any screen renders and when a screen's chunk fails to load.
 * Reference screen routes only through `lazy`; using one anywhere else in the main chunk, such as
 * in a `Component`, would pull it back into that chunk.
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
          {
            index: true,
            lazy: {
              Component: async () =>
                (await import('@/routes/HomeRoute')).HomeRoute,
            },
          },
          {
            path: '*',
            lazy: {
              Component: async () =>
                (await import('@/routes/NotFoundRoute')).NotFoundRoute,
            },
          },
        ],
      },
    ],
  },
];

export default routes;
