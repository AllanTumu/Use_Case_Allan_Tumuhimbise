const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    responseTimeout: 30000,
    requestTimeout: 5000,
    watchForFileChanges: false,
    waitForAnimations: true,
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
