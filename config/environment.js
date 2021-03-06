/* eslint-env node */

const apiHost = 'http://api.railsdiff.org';

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      "connect-src": "'self' " + apiHost,
      "img-src": "'self' *.google-analytics.com",
      "script-src": "'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com",
    },
    modulePrefix: 'rails-diff',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      apiHost,
      rawFileBaseUrl: 'https://github.com/railsdiff/api/raw/master/generated/'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
