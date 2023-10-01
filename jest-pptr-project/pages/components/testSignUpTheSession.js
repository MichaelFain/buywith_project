/**
 * Tests the sign-up process for a session.
 * @param {Object} page - Puppeteer page object.
 */
async function testSignUpTheSession(page) {
    try {
        // Wait for the session cards to load
        console.log('Wait for the session cards to load');
        await page.waitForSelector('.SessionCard_cardContainer__LXX2V ');

        // Get all current session cards
        console.log('Getting all session cards');
        const SESSION_CARD_SELECTOR = '.SessionCard_cardContainer__LXX2V';
        const SIGNUP_BUTTON_SELECTOR = '.SessionCard_buttonUrl__8l_kv';
        const QUERY_PARAM = '?buywith=';
        const sessionCards = await page.$$(SESSION_CARD_SELECTOR);
        assert(sessionCards.length > 0, 'No session cards found');

        // Randomly select one session card
        console.log('Randomly select one session card');
        const randomIndex = Math.floor(Math.random() * sessionCards.length);
        const randomSessionCard = sessionCards[randomIndex];

        // Click on the "Sign up" button of the selected session card
        console.log('Click on the "Sign up" button of the selected session card');
        const signUpButton = await randomSessionCard.$(SIGNUP_BUTTON_SELECTOR);
        assert(signUpButton, 'Sign up button not found');

        if (signUpButton) {
            // Initialize the promise to wait for a new page/tab to be created
            const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));

            // Click the button, which will open a new tab
            await signUpButton.click();

            // Wait for the new tab to be created
            const newPage = await newPagePromise;

            // Wait for the new page to load
            await newPage.waitForNavigation({ waitUntil: 'load', timeout: 30000 });

            // Now you can verify the URL of the new tab
            console.log('Verify that the external sign-up page is opened with the correct query parameter');
            const currentPageUrl = newPage.url();
            if (currentPageUrl.includes(QUERY_PARAM)) {
                console.log('External sign-up page is opened with the correct query parameter.');
            } else {
                console.log('Failed to open the external sign-up page with the correct query parameter.');
                assert.fail('Query parameter ?buywith= not found in URL');
            }
        }
    } catch (error) {
        console.log('Error in testSignUpTheSession:', error);
        throw error;
    }
}

// Export the testSignUpTheSession function
export default { testSignUpTheSession };
