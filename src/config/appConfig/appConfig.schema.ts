import { z } from 'zod';

/**
 * The schema that validates the merged environment variables and maps them to the application
 * config.
 *
 * @remarks
 * Values are trimmed, so a variable set to only whitespace counts as missing.
 */
export const appConfigSchema = z
  .object({
    VITE_APP_NAME: z.string().trim().min(1),
  })
  .transform((env) => ({
    appName: env.VITE_APP_NAME,
  }));

/**
 * Describes the validated application config, with values already checked and trimmed.
 */
export type AppConfig = z.output<typeof appConfigSchema>;
