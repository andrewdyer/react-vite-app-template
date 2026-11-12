/**
 * The URL of the runtime config file that the container writes at startup.
 */
export const RUNTIME_CONFIG_URL = '/config.js';

/**
 * Registers a listener that fetches the runtime config again whenever a service worker takes
 * control of the page, so the service worker caches it for offline use.
 *
 * @remarks
 * On a first visit, the page loads `config.js` before the service worker is installed, so that
 * request never reaches the service worker's cache. Without this, reloading offline after one
 * visit would start the application without its runtime config.
 *
 * @param container - The browser's service worker container. Defaults to
 * `navigator.serviceWorker`; when the browser has no service worker support, nothing is registered.
 */
const registerRuntimeConfigCaching = (
  container: ServiceWorkerContainer | undefined = navigator.serviceWorker
) => {
  container?.addEventListener('controllerchange', () => {
    // A failed fetch only means the config is not cached yet; the next control change retries.
    fetch(RUNTIME_CONFIG_URL).catch(() => undefined);
  });
};

export default registerRuntimeConfigCaching;
