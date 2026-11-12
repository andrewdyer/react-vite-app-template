import type { Meta, StoryObj } from '@storybook/react-vite';

import HomeTemplate from './HomeTemplate';

/**
 * The Storybook metadata for HomeTemplate, listed under Templates and shown full screen like a real page.
 */
const meta = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'React + Vite',
  },
} satisfies Meta<typeof HomeTemplate>;

export default meta;

/**
 * Describes a story for HomeTemplate, typed against its metadata so each story only needs the args it overrides.
 */
type Story = StoryObj<typeof meta>;

/**
 * The default story, showing the template with the application's home title.
 */
export const Default: Story = {};
