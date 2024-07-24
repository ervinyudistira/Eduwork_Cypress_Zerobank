/// <reference types="cypress" />

describe('Working with inputs', () => {
  beforeEach(() => {
    cy.visit("http://zero.webappsecurity.com/login.html")
    cy.url().should('include', 'login.html')
  });

  it('Should fill username', () => {
    cy.get('#user_login').clear().type('username')
  });

  it('Should fill password', () => {
    cy.get('input[name="user_password"]').clear().type('password')
  });

  it('Should try to login', () => {
    cy.fixture("user").then(user => {
      const { namauser, userpass } = user

      // Menggunakan custom command untuk login
      cy.login(namauser, userpass)

      // Verifikasi hasil login jika diperlukan
      // cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
    })
  });

  it('Should navigate to Pay Bills and pay bills', () => {
    // Asumsi bahwa login sudah berhasil dilakukan di sebelumnya
    cy.fixture("user").then(user => {
      const { namauser, userpass } = user

      // Login menggunakan custom command
      cy.login(namauser, userpass)

      // Navigasi ke Pay Bills
      cy.navigateToPayBills()

      // Menggunakan custom command untuk pay bills
      cy.payBills('Apple', '5', '100', '2024-07-11', 'Monthly payment') // Menggunakan nilai yang lebih spesifik

      // Verifikasi jika pembayaran berhasil
      cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
    })
  });
});