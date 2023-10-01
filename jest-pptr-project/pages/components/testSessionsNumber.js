/**
 * Tests the number of video sessions on a page.
 * @param {Object} page - Puppeteer page object.
 */
async function testSessionsNumber(page) {
    try {
    const SESSION_SELECTOR = '.SessionCard_cardContainer__LXX2V';
        const videoSessions = await page.$$('.SessionCard_cardContainer__LXX2V');
        if (videoSessions.length > 0) {
            console.log(`Number of video sessions: ${videoSessions.length}`);
        } else {
            console.log('No video sessions found');
        }
    } catch (error) {
        console.log('Error in testSessionsNumber:', error);
        throw error;
    }
}

// Export the testSessionsNumber function
export default { testSessionsNumber };
