// Import assertion library if not imported elsewhere
// import assert from 'assert';

/**
 * Tests the functionality of arrow swiping on a page.
 * @param {Object} page - Puppeteer page object.
 */
async function testArrowsSwipe(page) {
    try {
    // Constants for selectors and timeouts
    const LEFT_ARROW_SELECTOR = '[aria-label="scroll-left"]';
    const RIGHT_ARROW_SELECTOR = '[aria-label="scroll-right"]';
    const TIMEOUT = 5000;
        const leftArrow = await page.waitForSelector('[aria-label="scroll-left"]', { timeout: 5000 });
        const rightArrow = await page.waitForSelector('[aria-label="scroll-right"]', { timeout: 5000 });
        assert(leftArrow, 'Left arrow button should be present');
        assert(rightArrow, 'Right arrow button should be present');

        await page.click('[aria-label="scroll-left"]');
        await page.waitForTimeout(3000);
        await page.click('[aria-label="scroll-right"]');
        await page.waitForTimeout(2000);
    } catch (error) {
        console.log('Error in testArrowsSwipe:', error);
        throw error;
    }
}


// Export the testArrowsSwipe function
module.exports = { testArrowsSwipe };