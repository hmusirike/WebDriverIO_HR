/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.url(`https://www.ii.co.uk/`);

        /**
        * Using the above function we can easily navigate to any subpage
        * browser.url(`https://www.ii.co.uk/${path}`)
        */
    }
}
