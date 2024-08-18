describe("Login and test if anime cards are visible on the /dashboard/anime page", () => {
  it("should successfully log in with correct credentials", () => {
    cy.visit("/login");
    cy.get('[data-login="input-username"]').type(
      // Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"),
      "testaccount@12digital.de",
    );
    cy.get('[data-login="input-password"]').type(
      // Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"),
      "testaccount1!",
    );
    cy.get('[data-login="button-submit"]').click();
    it("should succesfully be redirected to /dashboard");
    cy.url().should("include", "/dashboard");
    cy.visit("dashboard/anime");
    cy.get('[data-card="card-single"]').should("be.visible");
  });
});
