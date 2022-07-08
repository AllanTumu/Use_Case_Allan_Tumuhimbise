/**
 * Created by Allan Tumuhimbise
 * This file includes the page objects and page actions for the login page.
 */

/// <reference types="cypress" />

class LoginPage {
  visit() {
    //fetch username and password from the json file
    cy.fixture("credentials").then((auth) => {
      var name = auth.auth_username;
      var password = auth.auth_password;
      // Vist the staging site
      cy.visit("https://staging-beta.on-running.com", {
        auth: {
          username: name,
          password: password,
        },
      });
    });
  }
}
export default LoginPage;
