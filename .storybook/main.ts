import path from 'path';

import { type StorybookViteConfig } from '@storybook/builder-vite';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { mergeConfig } from 'vite';

const config: StorybookViteConfig = {
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
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    emotionAlias: false
  },
  refs: {
    '@chakra-ui/react': { disable: true }
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      build: {
        target: browserslistToEsbuild(),
        sourcemap: false
      },
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../src')
        }
      }
    });
  }
};

export default config;
