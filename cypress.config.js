const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    pageLoadTimeout: 120000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    env: {
      TOKEN: 'YOUR_TOKEN_HERE',
      UNIVERSE: 'YOUR_UNIVERSE_HERE'
    }
  }
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
