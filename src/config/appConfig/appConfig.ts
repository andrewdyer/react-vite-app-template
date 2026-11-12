import { z } from 'zod';

import { type AppConfig, appConfigSchema } from './appConfig.schema';

/**
 * Parses the application config from the build-time and runtime environment variables.
 *
 * @remarks
 * Runtime values come from the `config.js` file the container writes at startup, and override
 * build-time values of the same name. This lets one image run in every environment.
 *
 * @param buildEnv - The variables Vite built into the bundle from `.env` files and the shell.
 * @param runtimeEnv - The variables the container wrote to `config.js`. Defaults to an empty object.
 * @returns The validated application config.
 * @throws {@link Error}
 * Thrown when a required variable is missing or invalid, with a message listing each problem.
 */
export const parseAppConfig = (
  buildEnv: Record<string, unknown>,
  runtimeEnv: Record<string, unknown> = {}
): AppConfig => {
  const result = appConfigSchema.safeParse({ ...buildEnv, ...runtimeEnv });

  if (!result.success) {
    throw new Error(
      `Invalid application config. Check the VITE_ environment variables:\n${z.prettifyError(result.error)}`
    );
  }

  return result.data;
};

/**
 * The application config, validated once when the application starts.
 *
 * @remarks
 * Importing this module throws if the config is invalid, so a misconfigured deployment fails at
 * startup with a clear message rather than later with an undefined value.
 */
const appConfig = parseAppConfig(import.meta.env, window.__APP_CONFIG__);

export default appConfig;
