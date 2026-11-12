import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';

import MainLayout from './MainLayout';

const DummyNestedPage = () => {
  return <div data-testid="nested-page">Nested Content</div>;
};

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
