import type { Meta, StoryObj } from '@storybook/react-vite';

import HomeTemplate from './HomeTemplate';

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

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
