import { AngularOnRailsClientPage } from './app.po';

describe('angular-on-rails-client App', () => {
  let page: AngularOnRailsClientPage;

  beforeEach(() => {
    page = new AngularOnRailsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
