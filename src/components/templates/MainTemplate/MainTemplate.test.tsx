import { render, screen, within } from '@testing-library/react';

import MainTemplate from './MainTemplate';

describe('MainTemplate', () => {
  it('should render its children inside the main landmark', () => {
    render(
      <MainTemplate>
        <p>Content</p>
      </MainTemplate>
    );

    expect(
      within(screen.getByRole('main')).getByText('Content')
    ).toBeInTheDocument();
  });
});
