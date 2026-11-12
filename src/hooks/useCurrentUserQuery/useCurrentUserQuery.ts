import { useQuery } from '@tanstack/react-query';

import { fetchCurrentUser } from '@/services';

/**
 * The query key that caches the signed-in user, used to read or invalidate it from elsewhere, such
 * as after signing out.
 */
export const currentUserQueryKey = ['currentUser'] as const;

/**
 * Returns the signed-in user query, fetching the user from the API on first use and sharing the
 * cached result with every other caller.
 *
 * @returns The query result, including the user once loaded, the request status and `refetch`.
 */
const useCurrentUserQuery = () =>
  useQuery({
    queryKey: currentUserQueryKey,
    queryFn: fetchCurrentUser,
  });

export default useCurrentUserQuery;
