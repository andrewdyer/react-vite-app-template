import type { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

type ProviderOptions = {
  initialEntries?: string[];
} & Omit<RenderOptions, 'wrapper'>;

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
