import { render, screen, within } from '@testing-library/react';

import ErrorLayout from './ErrorLayout';

vi.mock('@/routes', () => ({
  ErrorRoute: () => <div data-testid="error-route">Error Route</div>,
}));

describe('ErrorLayout', () => {
  it('should render the error route inside the main landmark', () => {
    render(<ErrorLayout />);

    expect(
      within(screen.getByRole('main')).getByTestId('error-route')
    ).toBeInTheDocument();
  });
});
