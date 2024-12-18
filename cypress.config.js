const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.pontosys.com',
    env:{ hideXr: true},
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  fixturesFolder: false,
});
