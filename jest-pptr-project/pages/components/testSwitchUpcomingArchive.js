// Function to test the switching between 'Upcoming' and 'Archive' tabs
async function testSwitchUpcomingArchive(page) {
    try {
    // Wait for the 'Upcoming' button to appear
        const upcomingButton = await page.waitForSelector('.LiveSessions_tabsHolder__h2LN1 > button:nth-of-type(1)', { timeout: 5000 });
    // Wait for the 'Archive' button to appear
        const archiveButton = await page.waitForSelector('.LiveSessions_tabsHolder__h2LN1 > button:nth-of-type(2)', { timeout: 5000 });

        const initialSessions = await page.$$('.SessionCard_cardContainer__LXX2V');
        const initialCount = initialSessions.length;

        // Click the 'Archive' button
        await archiveButton.click();
        await page.waitForTimeout(2000);

        const newSessions = await page.$$('.SessionCard_cardContainer__LXX2V');
        const newCount = newSessions.length;

        // Assert that the number of sessions changes when switching tabs
        assert(initialCount !== newCount, 'Sessions content did not change');
    } catch (error) {
        console.log('Error in testSwitchUpcomingArchive:', error);
        throw error;
    }
}



export default { testSwitchUpcomingArchive };