import { TestcliPage } from './app.po';

describe('testcli App', function() {
  let page: TestcliPage;

  beforeEach(() => {
    page = new TestcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
