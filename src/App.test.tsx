import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';

import routes from './App';

const { HomeRoute, MainLayout } = vi.hoisted(() => ({
  HomeRoute: vi.fn(),
  MainLayout: vi.fn(),
}));

vi.mock('@/layouts', () => ({
  ErrorLayout: () => <div data-testid="error-layout">Error Layout</div>,
  MainLayout,
}));

vi.mock('@/routes', () => ({
  ErrorRoute: () => <div data-testid="error-route">Error Route</div>,
}));

vi.mock('@/routes/HomeRoute', () => ({ HomeRoute }));

vi.mock('@/routes/NotFoundRoute', () => ({
  NotFoundRoute: () => <div data-testid="not-found-route">Not Found Route</div>,
}));

/**
 * Renders the application's route table in an in-memory router at the given URL.
 *
 * @param url - The URL the router starts at.
 * @returns The React Testing Library render result.
 */
const renderAt = (url: string) => {
  const router = createMemoryRouter(routes, { initialEntries: [url] });

  return render(<RouterProvider router={router} />);
};

describe('App', () => {
  beforeEach(() => {
    MainLayout.mockImplementation(() => (
      <div data-testid="main-layout">
        <Outlet />
      </div>
    ));
    HomeRoute.mockImplementation(() => (
      <div data-testid="home-route">Home Route</div>
    ));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should lazy-load the HomeRoute inside the MainLayout at the root path', async () => {
    renderAt('/');

    expect(
      await within(await screen.findByTestId('main-layout')).findByTestId(
        'home-route'
      )
    ).toBeInTheDocument();
  });

  it('should lazy-load the NotFoundRoute inside the MainLayout for an unknown path', async () => {
    renderAt('/missing');

    expect(
      await within(await screen.findByTestId('main-layout')).findByTestId(
        'not-found-route'
      )
    ).toBeInTheDocument();
  });

  it('should render the ErrorRoute inside the MainLayout when a screen throws', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    HomeRoute.mockImplementation(() => {
      throw new Error('Failed to render');
    });

    renderAt('/');

    expect(
      await within(await screen.findByTestId('main-layout')).findByTestId(
        'error-route'
      )
    ).toBeInTheDocument();
  });

  it('should render the ErrorLayout in place of the MainLayout when the layout throws', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    MainLayout.mockImplementation(() => {
      throw new Error('Failed to render');
    });

    renderAt('/');

    expect(await screen.findByTestId('error-layout')).toBeInTheDocument();
    expect(screen.queryByTestId('main-layout')).not.toBeInTheDocument();
  });
});
