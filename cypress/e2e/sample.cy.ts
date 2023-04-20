import { TestIds } from '~/shared/testids';

describe('should correctly configure cypress', () => {
  it('should render sample homepage', () => {
    cy.visit('/');
    cy.getByTestId(`${TestIds.SampleHome}`).should(
      'contain.text',
      'Sample Homepage'
    );
  });
});
