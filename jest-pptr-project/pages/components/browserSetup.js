import puppeteer from 'puppeteer';

/**
 * Sets up a browser instance using Puppeteer.
 * @returns {Object} An object containing the browser and page instances.
 */
/**
 * Sets up a browser instance using Puppeteer.
 * @returns {Object} An object containing the browser and page instances.
 */
async function setupBrowser() {
    try {
    try {
        // Launch a new browser instance
        const browser = await puppeteer.launch({ headless: false });
        
        // Open a new page
        const page = await browser.newPage();
        
        // Set the viewport dimensions
        await page.setViewport({ width: 1200, height: 800 });
        
        // Set the user agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537');
        
        // Navigate to the specified URL
        await page.goto('https://buywith.com');
        
        return { browser, page };
    } catch (error) {
            console.error('An error occurred while setting up the browser:', error);
    }
    } catch (error) {
        console.error('An error occurred while setting up the browser:', error);
    }
}

// Export the setupBrowser function
// Export the setupBrowser function
export default { setupBrowser };
