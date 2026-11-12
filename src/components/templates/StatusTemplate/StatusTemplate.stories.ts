import type { Meta, StoryObj } from '@storybook/react-vite';

import StatusTemplate from './StatusTemplate';

/**
 * The Storybook metadata for StatusTemplate, listed under Templates and shown full screen like a real page.
 */
const meta = {
  title: 'Templates/StatusTemplate',
  component: StatusTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    linkHref: '/',
    linkLabel: 'Go to the home page',
  },
} satisfies Meta<typeof StatusTemplate>;

export default meta;

/**
 * Describes a story for StatusTemplate, typed against its metadata so each story only needs the args it overrides.
 */
type Story = StoryObj<typeof meta>;

/**
 * The story for a missing page, matching the not-found screen's content.
 */
export const NotFound: Story = {
  args: {
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or may have moved.",
  },
};

/**
 * The story for an unexpected error, matching the error screen's content.
 */
export const UnexpectedError: Story = {
  args: {
    title: 'Something went wrong',
    description:
      'An unexpected error stopped this page from loading. Try again from the home page.',
  },
};
