import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render the home template with the page title', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'React + Vite' })
    ).toBeInTheDocument();
  });
});
