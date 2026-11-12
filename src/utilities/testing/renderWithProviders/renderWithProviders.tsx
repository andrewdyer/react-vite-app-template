import { QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { createQueryClient } from '@/services';

/**
 * Describes the options accepted by renderWithProviders.
 *
 * @remarks
 * Accepts every React Testing Library render option except `wrapper`, which renderWithProviders
 * supplies to provide the router and query client.
 */
type ProviderOptions = {
  /**
   * The history stack the in-memory router starts with, where the last entry is the current URL.
   *
   * @remarks
   * When omitted, the router starts at `/`.
   */
  initialEntries?: string[];
} & Omit<RenderOptions, 'wrapper'>;

/**
 * Renders a React element for testing as the only route of an in-memory data router, with its own
 * query client, so components that use routing hooks or queries can render without a browser URL
 * or a shared cache.
 *
 * @remarks
 * The element is matched at every URL, so `initialEntries` sets the location it sees without
 * affecting whether it renders. The router and query client are created once, so `rerender`
 * replaces the element while keeping the router, its location, the query cache and the element's
 * state. Failed queries are not retried, so error states appear straight away.
 *
 * @param ui - The element to render.
 * @param options - The router's starting history and any other render options. Defaults to an empty object.
 * @returns The React Testing Library render result, with queries bound to the rendered container.
 */
const renderWithProviders = (
  ui: ReactElement,
  { initialEntries, ...renderOptions }: ProviderOptions = {}
) => {
  const UiContext = createContext<ReactNode>(null);
  const RenderedUi = () => useContext(UiContext);

  const Wrapper = ({ children }: { children: ReactNode }) => {
    const [router] = useState(() =>
      createMemoryRouter([{ path: '*', Component: RenderedUi }], {
        initialEntries,
      })
    );
    const [queryClient] = useState(() =>
      createQueryClient({ defaultOptions: { queries: { retry: false } } })
    );

    return (
      <QueryClientProvider client={queryClient}>
        <UiContext value={children}>
          <RouterProvider router={router} />
        </UiContext>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProviders;
