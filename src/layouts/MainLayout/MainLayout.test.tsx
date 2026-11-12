import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';

import MainLayout from './MainLayout';

/**
 * Renders placeholder content for a child route, so tests can check that the layout renders its outlet.
 */
const DummyNestedPage = () => {
  return <div data-testid="nested-page">Nested Content</div>;
};

/**
 * Renders MainLayout as the root route's element, with a placeholder index route, at `/`.
 *
 * @returns The React Testing Library render result.
 */
const renderComponent = () => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DummyNestedPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('MainLayout', () => {
  it('should render nested content via Outlet', () => {
    renderComponent();

    const nestedPage = screen.getByTestId('nested-page');
    expect(nestedPage).toBeInTheDocument();
  });
});
