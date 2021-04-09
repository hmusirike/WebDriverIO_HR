import BasePage from '../pageObjects/base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage{
    /**
     * define selectors using getter methods
     */
    get servicesDropdown() { return $('//span[@aria-label="Services dropdown"]') }
    get tradingAccount() { return $('//span[contains(text(),"Trading Account")]') }
    get subMenuAccounts() { return $('//div[@aria-label="Our Accounts"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. click on a link
     */
    clickOnServicesMenu() {
        this.servicesDropdown.click();
    }

    clickOnTradingAccountLink() {
        this.tradingAccount.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    navigateToHomePage() {
        super.open();
    }
}

export default new HomePage();