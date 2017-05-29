import { AngularformspracticePage } from './app.po';

describe('angularformspractice App', () => {
  let page: AngularformspracticePage;

  beforeEach(() => {
    page = new AngularformspracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
