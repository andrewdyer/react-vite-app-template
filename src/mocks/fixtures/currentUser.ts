import type { CurrentUser } from '@/services/currentUser';

/**
 * The signed-in user the mock API returns.
 */
export const currentUserFixture: CurrentUser = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
};
