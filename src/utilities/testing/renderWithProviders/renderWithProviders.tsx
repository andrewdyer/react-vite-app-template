import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';

/**
 * Describes the options accepted by renderWithProviders.
 *
 * @remarks
 * Accepts every React Testing Library render option except `wrapper`, because the router is
 * rendered around the element rather than as a wrapper.
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
 * Renders a React element for testing as the only route of an in-memory data router, so components
 * that use routing hooks, including data router hooks, can render without a browser URL.
 *
 * @remarks
 * The element is matched at every URL, so `initialEntries` sets the location it sees without
 * affecting whether it renders.
 *
 * @param ui - The element to render.
 * @param options - The router's starting history and any other render options. Defaults to an empty object.
 * @returns The React Testing Library render result, with queries bound to the rendered container.
 */
const renderWithProviders = (
  ui: ReactElement,
  { initialEntries, ...renderOptions }: ProviderOptions = {}
) => {
  const router = createMemoryRouter([{ path: '*', element: ui }], {
    initialEntries,
  });

  return render(<RouterProvider router={router} />, renderOptions);
};

export default renderWithProviders;
