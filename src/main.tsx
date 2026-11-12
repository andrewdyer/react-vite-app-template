import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { registerRuntimeConfigCaching } from '@/config';
import { enableMocking } from '@/mocks/enableMocking';
import { QueryProvider } from '@/providers';

import routes from './App';

import './index.css';

/**
 * The browser router that renders the application's routes from the page URL.
 */
const router = createBrowserRouter(routes);

registerRuntimeConfigCaching();

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </StrictMode>
  );
});
