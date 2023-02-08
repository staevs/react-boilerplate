import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'junit/cypress-[hash].xml'
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },

  e2e: {
    baseUrl: 'http://localhost:3000'
  }
});
