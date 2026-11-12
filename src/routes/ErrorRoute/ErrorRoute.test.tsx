import { render, screen } from '@testing-library/react';
import { createMemoryRouter, data, RouterProvider } from 'react-router';

import ErrorRoute from './ErrorRoute';

vi.mock('@/components/pages', () => ({
  ErrorPage: () => <div data-testid="error-page">Error Page</div>,
  NotFoundPage: () => <div data-testid="not-found-page">Not Found Page</div>,
}));

/**
 * Renders ErrorRoute as the error boundary of a route whose loader throws the given value.
 *
 * @param thrown - The value the route's loader throws.
 * @returns The React Testing Library render result.
 */
const renderWithThrownValue = (thrown: unknown) => {
  const router = createMemoryRouter([
    {
      path: '/',
      loader: () => {
        throw thrown;
      },
      element: null,
      ErrorBoundary: ErrorRoute,
    },
  ]);

  return render(<RouterProvider router={router} />);
};

describe('ErrorRoute', () => {
  it('should render the error page when a route throws an error', async () => {
    renderWithThrownValue(new Error('Failed to load'));

    expect(await screen.findByTestId('error-page')).toBeInTheDocument();
  });

  it('should render the not-found page when a route throws a 404 response', async () => {
    renderWithThrownValue(data(null, { status: 404 }));

    expect(await screen.findByTestId('not-found-page')).toBeInTheDocument();
  });

  it('should render the error page when a route throws a non-404 response', async () => {
    renderWithThrownValue(data(null, { status: 500 }));

    expect(await screen.findByTestId('error-page')).toBeInTheDocument();
  });
});
