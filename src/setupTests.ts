import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect, vi } from 'vitest';

import { server } from '@/mocks/server';

expect.extend(matchers);

beforeAll(() => {
  server.listen({ onUnhandledFrame: 'error' });
});

afterEach(() => {
  cleanup();

  vi.clearAllMocks();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
