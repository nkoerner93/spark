describe("Test Login", () => {
  it("should successfully log in with correct credentials", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-login="input-username"]').type(
      Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"),
    );
    cy.get('[data-login="input-password"]').type(
      Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"),
    );
    cy.get('[data-login="button-submit"]').click();
    cy.wait(2000);
    cy.url().should("include", "/dashboard");
    cy.wait(2000);
    cy.visit("http://localhost:3000/dashboard/anime");
    cy.get('[data-card="card-single"]').should("be.visible");
  });
});
