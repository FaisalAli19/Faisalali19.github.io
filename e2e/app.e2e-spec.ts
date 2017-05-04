import { Faisalali19.Github.IoPage } from './app.po';

describe('faisalali19.github.io App', () => {
  let page: Faisalali19.Github.IoPage;

  beforeEach(() => {
    page = new Faisalali19.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
