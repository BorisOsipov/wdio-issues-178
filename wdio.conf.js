const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const path = require("path");
const fs = require("fs");


const conf = {
    reportPortalClientConfig: {
        token: 'a399606f-6302-4a58-8804-9dbd1e09f543',
        endpoint: 'https://demo.reportportal.io/api/v1',
        launch: 'launchname',
        project: 'borisosipov_personal',
        description: "Launch description text",
        mode: 'DEFAULT',
        debug: false,
        attributes: [],
    },
    reportSeleniumCommands: false,
    autoAttachScreenshots: true,
    seleniumCommandsLogLevel: 'debug',
    screenshotsLogLevel: 'info',
    parseTagsFromTestTitle: true,
    cucumberNestedSteps: true
};


exports.config = {
    specs: [
        './features/**/*.feature'
    ],
    maxInstances: 10,
    capabilities: [{

        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    services: ['chromedriver', [RpService, {}]],
    reporters: ['spec', [reportportal, conf]],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 2000,
        ignoreUndefinedDefinitions: false
    },

    afterStep: async function (test, context, { error }) {
        if (error) {
            await browser.saveScreenshot("./test.png");
        }
    }
}
