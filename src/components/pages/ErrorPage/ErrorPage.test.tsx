import { render, screen } from '@testing-library/react';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('should render the error message with a link to the home page', () => {
    render(<ErrorPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Something went wrong' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Go to the home page' })
    ).toHaveAttribute('href', '/');
  });
});
