import { render, screen, within } from '@testing-library/react';

import MainTemplate from './MainTemplate';

vi.mock('@/components/organisms', () => ({
  CurrentUserSummary: ({ status }: { status: string }) => (
    <div data-testid="current-user-summary">{status}</div>
  ),
}));

describe('MainTemplate', () => {
  it('should render its children inside the main landmark', () => {
    render(
      <MainTemplate>
        <p>Content</p>
      </MainTemplate>
    );

    expect(
      within(screen.getByRole('main')).getByText('Content')
    ).toBeInTheDocument();
  });

  it('should render the current user in the page header when given', () => {
    render(
      <MainTemplate currentUser={{ status: 'pending', onRetry: vi.fn() }}>
        <p>Content</p>
      </MainTemplate>
    );

    expect(
      within(screen.getByRole('banner')).getByTestId('current-user-summary')
    ).toHaveTextContent('pending');
  });

  it('should not render a header when no current user is given', () => {
    render(
      <MainTemplate>
        <p>Content</p>
      </MainTemplate>
    );

    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
  });
});
