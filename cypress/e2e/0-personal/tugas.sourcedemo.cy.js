/// <reference types="cypress" />

describe('Working with inputs', () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/")
      cy.url().should('include', 'saucedemo.com')
    });
  
    it('Should fill username', () => {
      cy.get('input[data-test="username"]').clear().type('username')
    });
  
    it('Should fill password', () => {
      cy.get('input[data-test="password"]').clear().type('password')
    });
  
    it('Should try to login', () => {
      cy.fixture("user").then(user => {
        const { username, password } = user
  
        cy.get('input[data-test="username"]').clear().type(username)
        cy.get('input[data-test="password"]').clear().type(password)
        cy.get('input[data-test="login-button"]').click()
        
        // Tambahkan asersi untuk memverifikasi hasil login
        cy.get('.error-message-container').should('be.visible')
      })
    });
  
  });