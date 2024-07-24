/// <reference types="cypress" />

describe("Working with inputs", () => {
  it("Visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Should fill username", () => {
    cy.get("#user_login").should("be.visible").clear();
    cy.get("#user_login").type("username");
  });

  it("Should fill password", () => {
    cy.get('input[name="user_password"]').should("be.visible").clear();
    cy.get('input[name="user_password"]').type("password");
  });

  it("Should check remember me", () => {
    cy.get("#user_remember_me").should("be.visible").check();
  });
});
