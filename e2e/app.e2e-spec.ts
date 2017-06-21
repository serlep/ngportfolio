import { AngularportfolioPage } from './app.po';

describe('angularportfolio App', () => {
  let page: AngularportfolioPage;

  beforeEach(() => {
    page = new AngularportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
