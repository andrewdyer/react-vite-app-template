import { apiRequest } from '@/services/api';

import { currentUserSchema } from './currentUser.schema';

/**
 * Fetches the signed-in user from the API.
 *
 * @remarks
 * The request carries no credentials yet, so the API cannot tell who is signed in until
 * authentication is added to {@link apiRequest}.
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
