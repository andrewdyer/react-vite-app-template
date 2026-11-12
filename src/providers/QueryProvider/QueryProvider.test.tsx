import { useQueryClient } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import { DEFAULT_STALE_TIME_MS } from '@/services';

import QueryProvider from './QueryProvider';

/**
 * Renders the stale time of the query client supplied by the nearest provider.
 */
const StaleTime = () => {
  const client = useQueryClient();

  return <p>{String(client.getDefaultOptions().queries?.staleTime)}</p>;
};

describe('QueryProvider', () => {
  it('should supply a query client with the application defaults to its children', () => {
    render(
      <QueryProvider>
        <StaleTime />
      </QueryProvider>
    );

    expect(screen.getByText(String(DEFAULT_STALE_TIME_MS))).toBeInTheDocument();
  });
});
