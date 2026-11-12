import { render, screen } from '@testing-library/react';

import StatusTemplate from './StatusTemplate';

describe('StatusTemplate', () => {
  it('should render the title, description and recovery link', () => {
    render(
      <StatusTemplate
        title="Page not found"
        description="The page may have moved."
        linkHref="/"
        linkLabel="Go to the home page"
      />
    );

    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' })
    ).toBeInTheDocument();
    expect(screen.getByText('The page may have moved.')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Go to the home page' })
    ).toHaveAttribute('href', '/');
  });
});
