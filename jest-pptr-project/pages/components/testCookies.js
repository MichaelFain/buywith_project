//const assert = require('assert');

// Function to test cookies permission on a webpage
async function testCookiesPermission(page) {
    try {
    // Wait for the cookies frame to appear
    const cookiesFrame = await page.waitForSelector('.cky-consent-bar', { timeout: 5000 });
    assert.ok(cookiesFrame, 'Cookies frame should be found');
    console.log('Cookies frame is found');
    // Click the 'Accept' button for cookies
    await page.click('[data-cky-tag="accept-button"]');
    console.log('Accept is clicked');
    } catch (error) {
            console.log('Error in testCookiesPermission:', error);
            throw error;
    }
}

export default { testCookiesPermission };
