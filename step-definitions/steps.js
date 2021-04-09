import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageObjects/home.page';
import TradingPage from '../pageObjects/trading.page';
import assert from 'assert';


Given(/^I navigate to the Interactive Investor Website$/, function() {
    /**
     * To navigate to the Home Page of Interactive Investor Website
     */
    HomePage.navigateToHomePage();  
    /**
     * Added a wait to avoid the test failure when the home page takes time to load
     */
    browser.pause(1000);
});

When(/^I click on the Services dropdown in the top navigation bar$/, function() {
    /**
     * clicking on the Services menu in the top navigation bar
     */
    HomePage.clickOnServicesMenu();
    /**
     * To validate the sub menu Accounts are being displayed or not using node.js assertion
     */
    assert.ok(HomePage.subMenuAccounts.isDisplayed());
});

When(/^I click on the Trading Account link in the sub menu$/, function() {
    /**
     * clicking on the Trading Account link from the sub menu
     */
    HomePage.clickOnTradingAccountLink();
});

Then(/^I should have landed on the expected trading account URL$/, function() {
    /**
     * to validate the user is in the right page i.e., Trading Account Url using wdio expect
     */
    expect(browser).toHaveUrl('https://www.ii.co.uk/ii-accounts/trading-account');
});

Then(/^The Trading Account page data is displaying correctly$/, function() {
    /**
     * to validate the heading of the Trading Account Page
     */
    expect(TradingPage.tradingAccountHeading).toBeExisting();
    /**
     * to validate the Trading Account is showing in the bread crumb navigation
     */
    expect(TradingPage.tradingAccountInBreadCrumb).toHaveTextContaining("Trading account")
    /**
     * to check the cost of the trading account a month
     */
    expect(TradingPage.subHeading).toHaveTextContaining('£9.99')
});


