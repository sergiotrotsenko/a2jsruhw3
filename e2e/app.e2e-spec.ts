import { A2jsruhw3Page } from './app.po';

describe('a2jsruhw3 App', () => {
  let page: A2jsruhw3Page;

  beforeEach(() => {
    page = new A2jsruhw3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
