import { QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';

import { createQueryClient } from '@/services';

/**
 * Describes the props accepted by QueryProvider.
 */
export type QueryProviderProps = {
  /**
   * The part of the application that can run queries and share their cache.
   */
  children: ReactNode;
};

/**
 * Supplies the Query context to its children.
 *
 * @remarks
 * The query client is created once per provider, so the cache survives re-renders but is not
 * shared between separate renders of the application, such as in tests.
 */
const QueryProvider = ({ children }: QueryProviderProps) => {
  const [client] = useState(() => createQueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
