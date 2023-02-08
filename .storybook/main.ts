import { cpus } from 'os';
import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    path.resolve(__dirname, '../src/**/*.stories.mdx'),
    path.resolve(__dirname, '../src/**/*.stories.@(js|jsx|ts|tsx)')
  ],
  staticDirs: [path.resolve(__dirname, '../public')],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {},
  refs: {
    '@chakra-ui/react': {
      disable: true
    }
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  docs: {
    autodocs: true
  },
  viteFinal(config) {
    return mergeConfig(config, {
      build: {
        sourcemap: false,
        rollupOptions: {
          maxParallelFileOps: Math.max(1, cpus().length - 1),
          output: {
            manualChunks: (id: string): string | void =>
              id.includes('node_modules') ? 'vendor' : undefined
          },
          cache: false
        }
      }
    });
  }
};

export default config;
