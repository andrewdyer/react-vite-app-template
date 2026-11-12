import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

vi.mock('@/config', () => ({
  appConfig: { appName: 'Configured App' },
}));

describe('HomePage', () => {
  it('should render the home template with the configured application name', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Configured App' })
    ).toBeInTheDocument();
  });
});
