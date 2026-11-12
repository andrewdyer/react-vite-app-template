import { setupWorker } from 'msw/browser';

import { handlers } from '@/mocks/handlers';

/**
 * The service worker that intercepts API requests in the browser during local development.
 */
export const worker = setupWorker(...handlers);
