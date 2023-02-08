import { type TestIds } from '~/shared/testids';

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(
        selector: (typeof TestIds)[keyof typeof TestIds],
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
      ): Chainable<JQuery>;
    }
  }
}

Cypress.Commands.add('getByTestId', (testId, options) =>
  cy.get(`[data-test-id="${testId}"]`, options)
);
