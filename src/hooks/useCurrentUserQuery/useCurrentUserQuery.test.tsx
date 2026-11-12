import { QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw/http';
import type { ReactNode } from 'react';

import { currentUserFixture } from '@/mocks/fixtures';
import { server } from '@/mocks/server';
import { createQueryClient } from '@/services';

import useCurrentUserQuery from './useCurrentUserQuery';

/**
 * Renders useCurrentUserQuery with its own query client that does not retry failed requests.
 *
 * @returns The React Testing Library hook render result.
 */
const renderCurrentUserQuery = () => {
  const client = createQueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return renderHook(() => useCurrentUserQuery(), {
    wrapper: ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
  });
};

describe('useCurrentUserQuery', () => {
  it('should return the signed-in user once the request succeeds', async () => {
    const { result } = renderCurrentUserQuery();

    await waitFor(() => expect(result.current.status).toBe('success'));
    expect(result.current.data).toEqual(currentUserFixture);
  });

  it('should report an error when the request fails', async () => {
    server.use(
      http.get('*/users/me', () => new HttpResponse(null, { status: 401 }))
    );

    const { result } = renderCurrentUserQuery();

    await waitFor(() => expect(result.current.status).toBe('error'));
  });
});
