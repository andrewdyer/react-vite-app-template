import { setupServer } from 'msw/node';

import { handlers } from '@/mocks/handlers';

/**
 * The request interceptor that mocks the API in unit tests, started from `setupTests.ts`.
 */
export const server = setupServer(...handlers);
