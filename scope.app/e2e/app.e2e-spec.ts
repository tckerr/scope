import { Scope.AppPage } from './app.po';

describe('scope.app App', () => {
  let page: Scope.AppPage;

  beforeEach(() => {
    page = new Scope.AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
