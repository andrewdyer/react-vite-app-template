import { render, screen } from '@testing-library/react';

import HomeRoute from './HomeRoute';

vi.mock('@/components/pages', () => ({
  HomePage: () => <div data-testid="home-page">Home Page</div>,
}));

describe('HomeRoute', () => {
  it('should render the home page', () => {
    render(<HomeRoute />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
