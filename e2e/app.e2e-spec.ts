import { AllyPage } from './app.po';

describe('ally App', function() {
  let page: AllyPage;

  beforeEach(() => {
    page = new AllyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
