import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import MainTemplate from './MainTemplate';

/**
 * The Storybook metadata for MainTemplate, listed under Templates and shown full screen like a real page.
 */
const meta = {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: <p>Page content</p>,
    currentUser: {
      status: 'success',
      user: { id: '1', name: 'Ada Lovelace', email: 'ada@example.com' },
      onRetry: fn(),
    },
  },
} satisfies Meta<typeof MainTemplate>;

export default meta;

/**
 * Describes a story for MainTemplate, typed against its metadata so each story only needs the args it overrides.
 */
type Story = StoryObj<typeof meta>;

/**
 * The default story, showing the signed-in user in the header above placeholder page content.
 */
export const Default: Story = {};

/**
 * The story without a current user, as on the root error screen, where no header is shown.
 */
export const WithoutHeader: Story = {
  args: {
    currentUser: undefined,
  },
};
