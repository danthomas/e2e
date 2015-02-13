// An example configuration file.
exports.config = {
  //directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['loginPage_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  rootElement: "#ngAppRootElement",
  allScriptsTimeout: 11000,
  baseUrl: "http://localhost:3000"
};
