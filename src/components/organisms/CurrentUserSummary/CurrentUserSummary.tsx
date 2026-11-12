import type { CurrentUser } from '@/services';

/**
 * Represents the loading states of the signed-in user, matching the states of a query.
 */
export type CurrentUserStatus = 'pending' | 'error' | 'success';

/**
 * Describes the props accepted by CurrentUserSummary.
 */
export type CurrentUserSummaryProps = {
  /**
   * The signed-in user to show once loaded.
   *
   * @remarks
   * Only read while {@link CurrentUserSummaryProps.status} is `'success'`. When omitted, nothing is
   * shown for that state.
   */
  user?: CurrentUser;

  /**
   * The loading state, which decides whether a loading message, an error with a retry button, or
   * the user is shown.
   */
  status: CurrentUserStatus;

  /**
   * Called when the user asks to load their account again after an error.
   */
  onRetry: () => void;
};

/**
 * Renders who is signed in, with a loading message or an error and retry button while the account
 * is unavailable.
 */
const CurrentUserSummary = ({
  user,
  status,
  onRetry,
}: CurrentUserSummaryProps) => {
  if (status === 'pending') {
    return <p role="status">Loading your account…</p>;
  }

  if (status === 'error') {
    return (
      <div role="alert">
        <p>Your account could not be loaded.</p>
        <button type="button" onClick={() => onRetry()}>
          Try again
        </button>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <p>
      Signed in as <strong>{user.name}</strong> ({user.email})
    </p>
  );
};

export default CurrentUserSummary;
