export * from './decorators';
export * from './globals';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(?<control>background|color)$/i,
      date: /Date$/
    }
  }
};
