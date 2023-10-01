import HomePage from '../pages/HomePage'
import {testArrowsSwipe, testCookies, testCookiesPermission,testForms,testPageHeaderTabs,testScrollPageUp,testSessionsNumber,testSignUpTheSession, testSwitchUpcomingArchive} from '../pages/components'


describe('BuyWith E2E Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    ({ browser, page } = await setupBrowser());
  });

  afterAll(async () => {
    await teardownBrowser(browser);
  });

  test('Home Page Loads Successfully', async () => {
    await browserSetup(page);
    const title = await getTitle(page);
    expect(title).toBe('buywith’s Livestream Shopping Platform: Bringing Shopping Back To Live!');
  });

  test('Test Arrow Swiping', async () => {
    await testArrowsSwipe(page);
  });

  test('Test Cookies Permission', async () => {
    await testCookiesPermission(page);
  });

  test('Test Forms', async () => {
    await testForms(page);
  });

  test('Test Page Header Tabs', async () => {
    await testPageHeaderTabs(page);
  });

  test('Test Scroll Page Up', async () => {
    await testScrollPageUp(page);
  });

  test('Test Sessions Number', async () => {
    await testSessionsNumber(page);
  });

  test('Test Sign Up The Session', async () => {
    await testSignUpTheSession(page);
  });

  test('Test Switch Upcoming Archive', async () => {
    await testSwitchUpcomingArchive(page);
  });

  // Add more test cases as needed


// Component Tests
describe('Component Tests', () => {
  it('should test TopBar component', async () => {
    await TopBar.someTestMethod();
  });

  it('should test browserSetup component', async () => {
    await browserSetup.someTestMethod();
  });

  // Add more component tests here
});
});


  