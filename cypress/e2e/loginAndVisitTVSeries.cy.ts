describe("Test Login", () => {
  it("should successfully log in with correct credentials", () => {
    cy.visit("/login");
    cy.get('[data-login="input-username"]').type(
      Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"),
    );
    cy.get('[data-login="input-password"]').type(
      Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"),
    );
    cy.get('[data-login="button-submit"]').click();
    cy.wait(1500);
    it("should succesfully be redirected to /dashboard");
    cy.url().should("include", "/dashboard");
    cy.wait(1500);
    cy.visit("dashboard/anime");
    cy.get('[data-card="card-single"]').should("be.visible");
  });
});
