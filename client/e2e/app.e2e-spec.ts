import { AuthorWizardPage } from './app.po';

describe('author-wizard App', function() {
  let page: AuthorWizardPage;

  beforeEach(() => {
    page = new AuthorWizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
