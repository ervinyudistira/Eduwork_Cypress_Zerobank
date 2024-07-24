/// <reference types="cypress" />

describe('Search Functionality Test', () => {
    it('Performs a search and verifies the results', () => {
      // Kunjungi halaman pencarian
      cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online');
  
      // Verifikasi URL
      cy.url().should('include', 'searchTerm=online');
  
      // Verifikasi teks di halaman hasil pencarian
      cy.contains('Search Results:').should('be.visible');
      cy.contains('The following pages were found for the query: online').should('be.visible');
  
      // Verifikasi link hasil pencarian
      cy.contains('Zero - Free Access to Online Banking').should('be.visible');
      cy.contains('Zero - Online Statements').should('be.visible');
  
      // Verifikasi link mengarah ke halaman yang benar
      cy.get('a').contains('Zero - Free Access to Online Banking')
        .should('have.attr', 'href', '/online-banking.html');
      cy.get('a').contains('Zero - Online Statements')
        .should('have.attr', 'href', '/online-statements.html');
    });
  });