// login.spec.js
import LoginPage from "../classes/LoginPage";

describe("Test Login", () => {
  beforeEach(() => {
    cy.reload();
    LoginPage.visit();
  });

  it("should successfully log in with correct credentials", () => {
    LoginPage.fillUsername(Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"));
    cy.log(Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"));
    cy.wait(500);
    LoginPage.fillPassword(Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"));
    cy.wait(500);
    LoginPage.submitLoginForm();
    cy.wait(500);
    LoginPage.verifyLoginSuccess();
  });

  it("should display error message with incorrect credentials", () => {
    LoginPage.fillUsername("invalid_username@randomxPl.com");
    LoginPage.fillPassword("invalid_password@randomxPl.com");
    LoginPage.submitLoginForm();
    cy.wait(10000);
    LoginPage.verifyLoginFailure();
  });

  // Add more test cases to cover other scenarios
});
