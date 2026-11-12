import { http, HttpResponse } from 'msw/http';

import { currentUserFixture } from '@/mocks/fixtures';

/**
 * The request handlers that mock the API, shared by unit tests and opt-in local development.
 *
 * @remarks
 * Paths start with `*` so they match whatever API URL is configured. Override a handler for a
 * single test with `server.use`.
 */
export const handlers = [
  http.get('*/users/me', () => HttpResponse.json(currentUserFixture)),
];
