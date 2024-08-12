describe("Test Login", () => {
  beforeEach(() => {
    cy.reload();
    cy.visit("http://localhost:3000/login");
  });

  it("should successfully log in with correct credentials", () => {
    cy.get('[data-login="input-username"]').type(
      Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"),
    );
    cy.get('[data-login="input-password"]').type(
      Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"),
    );
    cy.get('[data-login="button-submit"]').click();
    cy.wait(500);
    cy.url().should("include", "/dashboard");
  });

  it("should display error message with incorrect credentials", () => {
    cy.get('[data-login="input-username"]').type(
      "invalid_username@randomxPl.com",
    );
    cy.get('[data-login="input-password"]').type(
      "invalid_password@randomxPl.com",
    );
    cy.get('[data-login="button-submit"]').click();
    cy.wait(1000);
    cy.get('[data-toast="toast-title"]').should("be.visible").contains("Error");
  });

  // Add more test cases to cover other scenarios
});
