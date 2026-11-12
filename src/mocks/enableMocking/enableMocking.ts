/**
 * Starts the mock service worker when local development has API mocking enabled.
 *
 * @remarks
 * Mocking is enabled by setting `VITE_API_MOCKING=enabled` and only ever runs in development
 * builds. The worker is imported only when it is needed, so production builds contain neither
 * MSW nor the mock handlers. Requests without a mock handler reach the network unchanged.
 *
 * @returns A promise that settles once the worker is ready, or straight away when mocking is
 * disabled, so the application can render after it.
 */
const enableMocking = async () => {
  if (!import.meta.env.DEV || import.meta.env.VITE_API_MOCKING !== 'enabled') {
    return;
  }

  const { worker } = await import('@/mocks/browser');

  await worker.start({ onUnhandledFrame: 'bypass' });
};

export default enableMocking;
