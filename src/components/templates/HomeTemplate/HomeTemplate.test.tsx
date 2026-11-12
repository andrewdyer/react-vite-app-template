import { render, screen } from '@testing-library/react';

import HomeTemplate from './HomeTemplate';

describe('HomeTemplate', () => {
  it('should render the title as the page heading', () => {
    render(<HomeTemplate title="Welcome" />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome' })
    ).toBeInTheDocument();
  });
});
