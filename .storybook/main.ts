import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Drop vite-plugin-pwa: the service worker is only for the app build, and
  // it fails trying to precache Storybook's manager bundle.
  viteFinal: (config) => ({
    ...config,
    plugins: config.plugins
      ?.flat()
      .filter(
        (plugin) =>
          !(
            plugin &&
            'name' in plugin &&
            plugin.name.startsWith('vite-plugin-pwa')
          )
      ),
  }),
};
export default config;
