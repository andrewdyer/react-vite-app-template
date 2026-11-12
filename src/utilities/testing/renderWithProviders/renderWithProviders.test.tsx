import { screen } from '@testing-library/react';
import { useState } from 'react';
import { useLocation } from 'react-router';

import renderWithProviders from './renderWithProviders';

/**
 * Describes the props accepted by LocationLabel.
 */
type LocationLabelProps = {
  /**
   * The text shown before the current path.
   */
  label: string;
};

/**
 * Renders the given label with the router's current path and a render count, so tests can check
 * that routing context and component state survive a rerender.
 */
const LocationLabel = ({ label }: LocationLabelProps) => {
  const location = useLocation();
  const [mountedLabel] = useState(label);

  return (
    <p>
      {label} {location.pathname} (first rendered as {mountedLabel})
    </p>
  );
};

describe('renderWithProviders', () => {
  it('should render the element at the given location', () => {
    renderWithProviders(<LocationLabel label="Path" />, {
      initialEntries: ['/settings'],
    });

    expect(
      screen.getByText('Path /settings (first rendered as Path)')
    ).toBeInTheDocument();
  });

  it('should keep the router and component state when rerendering', () => {
    const { rerender } = renderWithProviders(<LocationLabel label="Before" />, {
      initialEntries: ['/settings'],
    });

    rerender(<LocationLabel label="After" />);

    expect(
      screen.getByText('After /settings (first rendered as Before)')
    ).toBeInTheDocument();
  });
});
