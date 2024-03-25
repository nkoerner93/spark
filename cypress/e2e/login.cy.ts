// login.spec.js
import LoginPage from "../classes/LoginPage";

describe("Test Login", () => {
  beforeEach(() => {
    cy.reload();
    LoginPage.visit();
  });
  it("should display error message with incorrect credentials", () => {
    LoginPage.fillUsername("invalid_username@randomxPl.com");
    LoginPage.fillPassword("invalid_password@randomxPl.com");
    LoginPage.submitLoginForm();
    LoginPage.verifyLoginFailure();
  });

  // Add more test cases to cover other scenarios
});
