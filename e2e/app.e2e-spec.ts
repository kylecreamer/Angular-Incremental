import { EgggamePage } from './app.po';

describe('egggame App', () => {
  let page: EgggamePage;

  beforeEach(() => {
    page = new EgggamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
