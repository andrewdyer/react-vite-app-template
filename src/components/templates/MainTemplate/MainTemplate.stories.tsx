import type { Meta, StoryObj } from '@storybook/react-vite';

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
  },
} satisfies Meta<typeof MainTemplate>;

export default meta;

/**
 * Describes a story for MainTemplate, typed against its metadata so each story only needs the args it overrides.
 */
type Story = StoryObj<typeof meta>;

/**
 * The default story, showing the template wrapped around placeholder page content.
 */
export const Default: Story = {};
