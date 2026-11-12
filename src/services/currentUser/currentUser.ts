import { apiRequest } from '@/services/api';

import { currentUserSchema } from './currentUser.schema';

/**
 * Fetches the signed-in user from the API.
 *
 * @remarks
 * The API decides who is signed in, for example from a session cookie or an authorization header
 * that the request carries.
 *
 * @returns The validated signed-in user.
 * @throws {@link ApiError}
 * Thrown when the API responds with a status outside the 2xx range, such as `401` when nobody is
 * signed in.
 * @throws {@link z.ZodError}
 * Thrown when the response does not match the user schema.
 */
export const fetchCurrentUser = () =>
  apiRequest('/users/me', currentUserSchema);
