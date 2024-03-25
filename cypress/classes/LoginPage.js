class LoginPage {
  visit() {
    cy.visit("http://localhost:3000/login");
  }

  fillUsername(username) {
    cy.get('[data-login="input-username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-login="input-password"]').type(password);
  }

  submitLoginForm() {
    cy.get('[data-login="button-submit"]').click();
  }

  verifyLoginSuccess() {
    cy.url().should("include", "/dashboard");
  }

  verifyLoginFailure() {
    cy.get('[data-toast="toast-title"]').should("be.visible").contains("Error");
  }
}

export default new LoginPage();
