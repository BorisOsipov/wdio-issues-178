const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url("https://github.com/BorisOsipov/wdio-reportportal-reporter/issues/178")
    await browser.pause(5000)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await browser.pause(5000)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await browser.pause(5000)
});

