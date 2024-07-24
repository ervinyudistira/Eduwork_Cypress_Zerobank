/// <reference types="cypress" />

describe("My First Test", () => {
  it.only('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io");

    cy.pause();

    cy.contains("type").click();

    // should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("ervinyudistira@gmail.com")
      .should("have.value", "ervinyudistira@gmail.com");
  });
});
