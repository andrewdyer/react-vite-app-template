import type { Meta, StoryObj } from '@storybook/react-vite';

import MainTemplate from './MainTemplate';

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

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
