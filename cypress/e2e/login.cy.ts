describe("Go to the login page and test a successfull & incorrect user login.", () => {
  beforeEach(() => {
    cy.reload();
    cy.visit("/login");
  });

  it("should successfully log in with correct credentials", () => {
    console.log(Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"));
    console.log(Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"));
    cy.get('[data-login="input-username"]').type(
      // Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"),
      "testaccount@12digital.de",
    );
    cy.get('[data-login="input-password"]').type(
      // Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"),
      "testaccount1!",
    );
    cy.get('[data-login="button-submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("should use incorrect credentials and check if the error toast appears and exists", () => {
    cy.get('[data-login="input-username"]').type(
      "invalid_username@randomxPl.com",
    );
    cy.get('[data-login="input-password"]').type(
      "invalid_password@randomxPl.com",
    );
    cy.get('[data-login="button-submit"]').click();
    cy.wait(2000);
    const toast = cy.get('[data-toast="toast-title"]');
    toast.contains("Error");
  });
});
