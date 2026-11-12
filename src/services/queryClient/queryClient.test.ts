import { createQueryClient, DEFAULT_STALE_TIME_MS } from './queryClient';

describe('createQueryClient', () => {
  it('should apply the default stale time to queries', () => {
    const client = createQueryClient();

    expect(client.getDefaultOptions().queries?.staleTime).toBe(
      DEFAULT_STALE_TIME_MS
    );
  });

  it('should let the given config override and extend the defaults', () => {
    const client = createQueryClient({
      defaultOptions: { queries: { staleTime: 0, retry: false } },
    });

    expect(client.getDefaultOptions().queries).toMatchObject({
      staleTime: 0,
      retry: false,
    });
  });
});
