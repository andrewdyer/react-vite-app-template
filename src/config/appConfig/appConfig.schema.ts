import { z } from 'zod';

/**
 * The schema that validates the merged environment variables and maps them to the application
 * config.
 *
 * @remarks
 * Values are trimmed, so a variable set to only whitespace counts as missing. Trailing slashes are
 * removed from the API URL, so request paths can always start with `/`.
 */
export const appConfigSchema = z
  .object({
    VITE_APP_NAME: z.string().trim().min(1),
    VITE_API_URL: z.url().trim(),
  })
  .transform((env) => ({
    appName: env.VITE_APP_NAME,
    apiUrl: env.VITE_API_URL.replace(/\/+$/, ''),
  }));

/**
 * Describes the validated application config, with values already checked and normalised.
 */
export type AppConfig = z.output<typeof appConfigSchema>;
