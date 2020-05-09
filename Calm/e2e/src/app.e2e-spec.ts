import { AppPage } from './app.po'; // imports login browser 
import { browser, logging } from 'protractor'; // imports login browser
// workspace app description
describe('workspace-project App', () => {
  let page: AppPage;
  // method that new page displays
  beforeEach(() => {
    page = new AppPage();
  });
    //method that Asserts a display page for welcome message.
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Calm app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
