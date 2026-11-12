import registerRuntimeConfigCaching, {
  RUNTIME_CONFIG_URL,
} from './registerRuntimeConfigCaching';

/**
 * Creates an event target that stands in for the browser's service worker container.
 *
 * @returns The fake container, typed as a service worker container.
 */
const createContainer = () =>
  new EventTarget() as unknown as ServiceWorkerContainer;

describe('registerRuntimeConfigCaching', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch the runtime config when a service worker takes control', () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(''));
    const container = createContainer();

    registerRuntimeConfigCaching(container);
    container.dispatchEvent(new Event('controllerchange'));

    expect(fetchSpy).toHaveBeenCalledWith(RUNTIME_CONFIG_URL);
  });

  it('should not fetch the runtime config before a service worker takes control', () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(''));

    registerRuntimeConfigCaching(createContainer());

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('should ignore a failed fetch', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Offline'));
    const container = createContainer();

    registerRuntimeConfigCaching(container);

    expect(() =>
      container.dispatchEvent(new Event('controllerchange'))
    ).not.toThrow();
    await Promise.resolve();
  });

  it('should do nothing when service workers are not supported', () => {
    expect(() => registerRuntimeConfigCaching(undefined)).not.toThrow();
  });
});
