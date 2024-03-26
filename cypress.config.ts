import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    CYPRESS_LOGIN_USERNAME_ADMIN: Cypress.env("CYPRESS_LOGIN_USERNAME_ADMIN"),
    CYPRESS_LOGIN_PASSWORD_ADMIN: Cypress.env("CYPRESS_LOGIN_PASSWORD_ADMIN"),
  },
});
