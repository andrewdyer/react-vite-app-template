import type { z } from 'zod';

import { appConfig } from '@/config';

import { ApiError } from './ApiError';

/**
 * Fetches a JSON resource from the configured API and validates the response body.
 *
 * @remarks
 * Validating the body means a change in the API's response shape fails at the request, with a
 * message naming the unexpected fields, rather than later where the data is used.
 *
 * @typeParam T - The validated response type the schema produces.
 * @param path - The resource path, relative to the API URL, starting with `/`.
 * @param schema - The schema the response body must match.
 * @param init - Any further request options. When omitted, a plain GET request is sent.
 * @returns The validated response body.
 * @throws {@link ApiError}
 * Thrown when the API responds with a status outside the 2xx range.
 * @throws {@link z.ZodError}
 * Thrown when the response body does not match the schema.
 */
export const apiRequest = async <T>(
  path: string,
  schema: z.ZodType<T>,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(`${appConfig.apiUrl}${path}`, {
    headers: { Accept: 'application/json' },
    ...init,
  });

  if (!response.ok) {
    throw new ApiError(response.status, path);
  }

  return schema.parse(await response.json());
};
