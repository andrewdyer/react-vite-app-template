import { QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { http, HttpResponse } from 'msw/http';
import { MemoryRouter, Route, Routes } from 'react-router';

import { currentUserFixture } from '@/mocks/fixtures';
import { server } from '@/mocks/server';
import { createQueryClient } from '@/services';

import MainLayout from './MainLayout';

/**
 * Renders placeholder content for a child route, so tests can check that the layout renders its outlet.
 */
const DummyNestedPage = () => {
  return <div data-testid="nested-page">Nested Content</div>;
};

/**
 * Renders MainLayout as the root route's element, with a placeholder index route, at `/`, and a
 * query client that does not retry failed requests.
 *
 * @returns The React Testing Library render result.
 */
const renderComponent = () => {
  const client = createQueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DummyNestedPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

describe('MainLayout', () => {
  it('should render nested content via Outlet inside the main landmark', () => {
    renderComponent();

    expect(
      within(screen.getByRole('main')).getByTestId('nested-page')
    ).toBeInTheDocument();
  });

  it('should show the signed-in user in the header once loaded', async () => {
    renderComponent();

    expect(
      await within(screen.getByRole('banner')).findByText(
        currentUserFixture.name
      )
    ).toBeInTheDocument();
  });

  it('should load the user again when retrying after an error', async () => {
    server.use(
      http.get('*/users/me', () => new HttpResponse(null, { status: 500 }), {
        once: true,
      })
    );
    renderComponent();

    fireEvent.click(await screen.findByRole('button', { name: 'Try again' }));

    expect(
      await screen.findByText(currentUserFixture.name)
    ).toBeInTheDocument();
  });
});
