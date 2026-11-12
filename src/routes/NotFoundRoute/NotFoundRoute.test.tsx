import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utilities/testing';

import NotFoundRoute from './NotFoundRoute';

vi.mock('@/components/pages', () => ({
  NotFoundPage: () => <div data-testid="not-found-page">Not Found Page</div>,
}));

describe('NotFoundRoute', () => {
  it('should render the not-found page', () => {
    renderWithProviders(<NotFoundRoute />, { initialEntries: ['/missing'] });

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
