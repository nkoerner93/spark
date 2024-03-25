// login.spec.js
import LoginPage from "../classes/LoginPage";

describe("Test Login", () => {
  beforeEach(() => {
    cy.reload();
    LoginPage.visit();
  });

  it("should successfully log in with correct credentials", () => {
    console.log("Username:", Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"));
    console.log("Password:", Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"));
    LoginPage.fillUsername(Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"));
    LoginPage.fillPassword(Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"));
    LoginPage.submitLoginForm();
    LoginPage.verifyLoginSuccess();
  });

  it("should display error message with incorrect credentials", () => {
    LoginPage.fillUsername("invalid_username@randomxPl.com");
    LoginPage.fillPassword("invalid_password@randomxPl.com");
    LoginPage.submitLoginForm();
    LoginPage.verifyLoginFailure();
  });

  // Add more test cases to cover other scenarios
});
