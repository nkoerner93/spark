import LoginPage from "../classes/LoginPage";

describe("Test Login", () => {
  beforeEach(() => {
    cy.reload();
    LoginPage.visit();
  });

  it("should successfully log in with correct credentials", () => {
    const username = Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN");
    const password = Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN");

    LoginPage.fillUsername(username);
    LoginPage.fillPassword(password);
    LoginPage.submitLoginForm();
    cy.wait(500);
    LoginPage.verifyLoginSuccess();
  });

  it("should display error message with incorrect credentials", () => {
    const invalidUsername = "invalid_username@randomxPl.com";
    const invalidPassword = "invalid_password@randomxPl.com";

    LoginPage.fillUsername(invalidUsername);
    LoginPage.fillPassword(invalidPassword);
    LoginPage.submitLoginForm();
    cy.wait(10000);
    LoginPage.verifyLoginFailure();
  });
});
