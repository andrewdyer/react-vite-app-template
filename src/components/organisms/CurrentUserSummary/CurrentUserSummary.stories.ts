import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import CurrentUserSummary from './CurrentUserSummary';

/**
 * The Storybook metadata for CurrentUserSummary, listed under Organisms with a spy for the retry
 * callback.
 */
const meta = {
  title: 'Organisms/CurrentUserSummary',
  component: CurrentUserSummary,
  args: {
    onRetry: fn(),
  },
} satisfies Meta<typeof CurrentUserSummary>;

export default meta;

/**
 * Describes a story for CurrentUserSummary, typed against its metadata so each story only needs the
 * args it overrides.
 */
type Story = StoryObj<typeof meta>;

/**
 * The story for a loaded account, showing the signed-in user.
 */
export const SignedIn: Story = {
  args: {
    status: 'success',
    user: { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
  },
};

/**
 * The story for the summary while the account is loading.
 */
export const Pending: Story = {
  args: {
    status: 'pending',
  },
};

/**
 * The story for the summary after the account failed to load, with a retry button.
 */
export const LoadError: Story = {
  args: {
    status: 'error',
  },
};
