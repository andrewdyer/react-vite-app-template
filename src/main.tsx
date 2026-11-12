import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { registerRuntimeConfigCaching } from '@/config';

import routes from './App';

import './index.css';

/**
 * The browser router that renders the application's routes from the page URL.
 */
const router = createBrowserRouter(routes);

registerRuntimeConfigCaching();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
