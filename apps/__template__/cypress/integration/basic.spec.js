/* eslint-disable no-undef */
import { BUTTON } from '../../cid';
describe('My First Test', function() {
  it('click Button to navigate', function() {
    cy.visit('http://localhost:3000/en-us');
    cy.findByCID(BUTTON, 'Submit').click();
    cy.url().should('include', '/users/octocat');
  });
});
