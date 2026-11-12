import { z } from 'zod';

/**
 * The schema that validates the signed-in user returned by the API.
 */
export const currentUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
});

/**
 * Describes the signed-in user returned by the API.
 */
export type CurrentUser = z.output<typeof currentUserSchema>;
