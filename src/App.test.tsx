import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';

import routes from './App';

const { HomeRoute } = vi.hoisted(() => ({ HomeRoute: vi.fn() }));

vi.mock('@/layouts', () => ({
  MainLayout: () => (
    <div data-testid="main-layout">
      <Outlet />
    </div>
  ),
}));

vi.mock('@/routes', () => ({
  ErrorRoute: () => <div data-testid="error-route">Error Route</div>,
  HomeRoute,
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
    HomeRoute.mockImplementation(() => (
      <div data-testid="home-route">Home Route</div>
    ));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the HomeRoute inside the MainLayout at the root path', () => {
    renderAt('/');

    expect(
      within(screen.getByTestId('main-layout')).getByTestId('home-route')
    ).toBeInTheDocument();
  });

  it('should render the NotFoundRoute inside the MainLayout for an unknown path', () => {
    renderAt('/missing');

    expect(
      within(screen.getByTestId('main-layout')).getByTestId('not-found-route')
    ).toBeInTheDocument();
  });

  it('should render the ErrorRoute inside the MainLayout when a screen throws', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    HomeRoute.mockImplementation(() => {
      throw new Error('Failed to render');
    });

    renderAt('/');

    expect(
      within(screen.getByTestId('main-layout')).getByTestId('error-route')
    ).toBeInTheDocument();
  });
});
