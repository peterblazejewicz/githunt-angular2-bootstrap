import { GithuntPage } from './app.po';

describe('githunt App', function() {
  let page: GithuntPage;

  beforeEach(() => {
    page = new GithuntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pb works!');
  });
});
