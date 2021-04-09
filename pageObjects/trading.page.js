import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TradingPage extends BasePage{
    /**
     * define selectors using getter methods
     */
    get tradingAccountInBreadCrumb() { return $('//span[contains(text(),"Trading account")]') }
    get tradingAccountHeading() { return $('//h1[contains(text(),"Trading Account")]') }
    get subHeading() { return $('//p[contains(@class,"text-subheading")]') }

}

export default new TradingPage();