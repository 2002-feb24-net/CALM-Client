import { browser, by, element } from 'protractor'; // imports from a protractor
/**
 * export class Apppage that returns the baseUrl as Promise
 */
export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  /**
   *  gets tittle method that returns an element.
   */
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
