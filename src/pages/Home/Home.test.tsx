import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('should render the Home component without error', () => {
    render(<Home />);

    expect(screen.getByText('React + Vite')).toBeInTheDocument();
  });
});
