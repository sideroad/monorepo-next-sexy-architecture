/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('findByCID', (cid, text) => {
  if (text) {
    return cy.get(`[data-cid=${cid}]`).contains(text);
  }
  return cy.get(`[data-cid=${cid}]`);
});
Cypress.Commands.add('findFirstByCID', (cid, text) => {
  if (text) {
    return cy
      .get(`[data-cid=${cid}]`)
      .contains(text)
      .first();
  }
  return cy.get(`[data-cid=${cid}]`).first();
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
