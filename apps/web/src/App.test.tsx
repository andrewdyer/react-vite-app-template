import { screen } from '@testing-library/react';
import { Outlet } from 'react-router-dom';

import App from './App';

import { renderWithProviders } from '@/utils/testing';

vi.mock('@/layouts', async () => ({
  MainLayout: () => (
    <div data-testid="main-layout">
      <Outlet />
    </div>
  ),
}));

vi.mock('@/pages', async () => ({
  Home: () => <div data-testid="home-page">Home Page</div>,
}));

describe('App', () => {
  it('should render the MainLayout component when navigating to the root path', () => {
    renderWithProviders(<App />, { initialEntries: ['/'] });

    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toBeInTheDocument();
  });

  it('should render the Home component when navigating to the root path', () => {
    renderWithProviders(<App />, { initialEntries: ['/'] });

    const Home = screen.getByTestId('home-page');
    expect(Home).toBeInTheDocument();
  });
});
