import { browser, element, by } from 'protractor';

export class GithuntPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('githunt-root h1')).getText();
  }
}
