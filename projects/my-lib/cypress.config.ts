import { defineConfig } from 'cypress';
import coverageWebpack from './cypress/coverage.webpack';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: './node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: 'reports/my-lib',
    overwrite: true,
    html: true,
    json: true,
  },

  component: {
    supportFile: 'projects/my-lib/cypress/support/component.ts',
    supportFolder: 'projects/my-lib/cypress/support',
    indexHtmlFile:
      'projects/my-lib/cypress/support/component-index.html',
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack,
      options: {
        projectConfig: {
          root: 'projects/my-lib',
          sourceRoot: 'projects/my-lib/src',
          buildOptions: {
            outputPath: 'dist/my-lib',
            main: 'src/entrypoint-cypress.ts',
            tsConfig: 'projects/my-lib/tsconfig.lib.json',
          },
        },
      },
    },
    specPattern: 'projects/my-lib/cypress/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
