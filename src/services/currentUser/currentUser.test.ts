import { currentUserFixture } from '@/mocks/fixtures';

import { fetchCurrentUser } from './currentUser';

describe('fetchCurrentUser', () => {
  it('should return the signed-in user from the API', async () => {
    await expect(fetchCurrentUser()).resolves.toEqual(currentUserFixture);
  });
});
