import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router';

/**
 * Describes the options accepted by renderWithProviders.
 *
 * @remarks
 * Accepts every React Testing Library render option except `wrapper`, which renderWithProviders supplies.
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
 * Renders a React element for testing inside an in-memory router, so components that use routing can render without a browser URL.
 *
 * @param ui - The element to render.
 * @param options - The router's starting history and any other render options. Defaults to an empty object.
 * @returns The React Testing Library render result, with queries bound to the rendered container.
 */
const renderWithProviders = (
  ui: ReactElement,
  { initialEntries, ...renderOptions }: ProviderOptions = {}
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    ),
    ...renderOptions,
  });
};

export default renderWithProviders;
