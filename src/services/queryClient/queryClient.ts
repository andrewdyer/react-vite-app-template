import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

/**
 * How long fetched data stays fresh before a new mount or window focus refetches it, in
 * milliseconds.
 *
 * @remarks
 * TanStack Query treats data as stale immediately by default, which refetches on every mount.
 * A minute avoids repeated requests while moving between screens.
 */
export const DEFAULT_STALE_TIME_MS = 60_000;

/**
 * Creates a query client with the application's default caching behaviour.
 *
 * @param config - Settings that override the defaults, such as disabling retries in tests. When
 * omitted, only the application defaults apply.
 * @returns A new query client with its own empty cache.
 */
export const createQueryClient = (config: QueryClientConfig = {}) =>
  new QueryClient({
    ...config,
    defaultOptions: {
      ...config.defaultOptions,
      queries: {
        staleTime: DEFAULT_STALE_TIME_MS,
        ...config.defaultOptions?.queries,
      },
    },
  });
