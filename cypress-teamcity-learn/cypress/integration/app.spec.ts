import * as cypress from "cypress";
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('displays two todo items by default', () => {
    cy.get('div.toolbar').should('contain', 'Welcomes');
  });
});
