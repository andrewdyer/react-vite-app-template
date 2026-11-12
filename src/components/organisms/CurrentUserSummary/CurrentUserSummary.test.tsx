import { fireEvent, render, screen } from '@testing-library/react';

import CurrentUserSummary from './CurrentUserSummary';

/**
 * The signed-in user shown by the loaded tests.
 */
const user = { id: '1', name: 'Grace Hopper', email: 'grace@example.com' };

describe('CurrentUserSummary', () => {
  it('should render a loading message while pending', () => {
    render(<CurrentUserSummary status="pending" onRetry={vi.fn()} />);

    expect(screen.getByRole('status')).toHaveTextContent(
      'Loading your account…'
    );
  });

  it('should render the signed-in user once loaded', () => {
    render(
      <CurrentUserSummary status="success" user={user} onRetry={vi.fn()} />
    );

    expect(
      screen.getByText((_, element) =>
        element?.tagName === 'P'
          ? element.textContent ===
            'Signed in as Grace Hopper (grace@example.com)'
          : false
      )
    ).toBeInTheDocument();
  });

  it('should render nothing when loaded without a user', () => {
    const { container } = render(
      <CurrentUserSummary status="success" onRetry={vi.fn()} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should call onRetry without arguments when retrying after an error', () => {
    const onRetry = vi.fn();
    render(<CurrentUserSummary status="error" onRetry={onRetry} />);

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Your account could not be loaded.'
    );
    fireEvent.click(screen.getByRole('button', { name: 'Try again' }));

    expect(onRetry).toHaveBeenCalledExactlyOnceWith();
  });
});
