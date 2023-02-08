import path from 'path';

import react from '@vitejs/plugin-react-swc';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

const getSvgrPluginOptions = () => ({
  svgrOptions: {
    prettier: false,
    svgo: false,
    svgoConfig: {
      plugins: [{ removeViewBox: false }]
    },
    titleProp: true,
    ref: true
  }
});

const getEslintPluginOptions = (isProductionBuild: boolean) => ({
  failOnError: isProductionBuild,
  failOnWarning: false
});

const getVisualizerPluginOptions = () => ({
  title: 'Dependency Analysis',
  filename: 'bundleAnalysisReport.html',
  gzipSize: true
});

export default defineConfig(({ mode }) => {
  const isProductionBuild = !['development', 'test'].includes(mode);

  const serverConfig = {
    port: 3000,
    host: true,
    strictPort: true
  };

  const plugins: PluginOption[] = [
    svgr(getSvgrPluginOptions()),
    react(),
    eslint(getEslintPluginOptions(isProductionBuild)),
    visualizer(getVisualizerPluginOptions())
  ];

  const target = browserslistToEsbuild();

  if (!target.length) {
    throw new Error('Plz, verify browserslist config!');
  }

  return {
    build: {
      outDir: 'build',
      emptyOutDir: true,
      manifest: 'assets-manifest.json',
      target
    },
    server: {
      ...serverConfig
    },
    preview: {
      ...serverConfig
    },
    plugins,
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      css: true,
      passWithNoTests: true,
      deps: {
        fallbackCJS: true
      },
      reporters: 'default',
      coverage: {
        src: ['src']
      }
    }
  };
});
