import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should have a Vite logo link with correct href and target', () => {
    render(<App />);

    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(viteLink).toHaveAttribute('target', '_blank');
  });

  it('should have a React logo link with correct href and target', () => {
    render(<App />);

    const reactLink = screen.getByRole('link', { name: /react logo/i });
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(reactLink).toHaveAttribute('target', '_blank');
  });

  it('should increment the counter when the button is clicked', () => {
    render(<App />);

    expect(screen.getByText('count is 0')).toBeInTheDocument();

    const button = screen.getByText(/count is \d/);

    fireEvent.click(button);
    expect(screen.getByText('count is 1')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('count is 2')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('count is 3')).toBeInTheDocument();
  });
});
