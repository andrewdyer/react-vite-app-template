/**
 * Describes the environment variables Vite exposes to the application through `import.meta.env`.
 *
 * @remarks
 * Every variable is optional here because a value may instead come from the runtime config file.
 * Required values are enforced when the application config is parsed.
 */
interface ImportMetaEnv {
  /**
   * The application's display name, shown as the home screen's heading.
   *
   * @remarks
   * When omitted, the value must come from the runtime config file instead.
   */
  readonly VITE_APP_NAME?: string;
}

/**
 * Describes the browser global object, extended with the runtime config the container writes to
 * `config.js`.
 */
interface Window {
  /**
   * The environment variables the container wrote to `config.js` at startup, keyed by their
   * `VITE_` names.
   *
   * @remarks
   * When omitted, or empty outside a container, only the values Vite built into the bundle apply.
   */
  __APP_CONFIG__?: Record<string, string>;
}
