import { screen } from '@testing-library/react';
import { Outlet } from 'react-router';

import { renderWithProviders } from '@/utilities/testing';

import App from './App';

vi.mock('@/layouts', async () => ({
  MainLayout: () => (
    <div data-testid="main-layout">
      <Outlet />
    </div>
  ),
}));

vi.mock('@/routes', async () => ({
  HomeRoute: () => <div data-testid="home-route">Home Route</div>,
}));

describe('App', () => {
  it('should render the MainLayout component when navigating to the root path', () => {
    renderWithProviders(<App />, { initialEntries: ['/'] });

    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toBeInTheDocument();
  });

  it('should render the HomeRoute component when navigating to the root path', () => {
    renderWithProviders(<App />, { initialEntries: ['/'] });

    const homeRoute = screen.getByTestId('home-route');
    expect(homeRoute).toBeInTheDocument();
  });
});
