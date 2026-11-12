import { render, screen } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('should render the not-found message with a link to the home page', () => {
    render(<NotFoundPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Go to the home page' })
    ).toHaveAttribute('href', '/');
  });
});
