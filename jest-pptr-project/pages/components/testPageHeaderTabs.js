/**
 * Tests the functionality of header tabs on a page.
 * @param {Object} page - Puppeteer page object.
 */
async function testPageHeaderTabs(page) {
    try {
        const headerButtons = [
            'Live sessions',
            'About',
            'How it works',
            'For brands',
            'For influencers',
            'FAQ',
        ];

        for (const buttonText of headerButtons) {
            await page.evaluate((text) => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const targetButton = buttons.find(button => button.textContent.includes(text));
                if (targetButton) targetButton.click();
            }, buttonText);
            console.log(`Clicked ${buttonText} button`);
            await new Promise(r => setTimeout(r, 2000));
        }
    } catch (error) {
        console.log('Error in testPageHeaderTabs:', error);
        throw error;
    }
}

// Export the testPageHeaderTabs function
export default { testPageHeaderTabs };
