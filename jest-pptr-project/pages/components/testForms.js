
// Import the Puppeteer library
const puppeteer = require('puppeteer');

/**
 * Asynchronously tests the functionality of forms on a webpage.
 * @param {Object} page - The Puppeteer page object.
 * @throws Will throw an error if any part of the form test fails.
 */
/**
 * Asynchronously tests the functionality of forms on a webpage.
 * @param {Object} page - The Puppeteer page object.
 * @throws Will throw an error if any part of the form test fails.
 */
async function testForms(page) {
  try {
    // Click the "Want" button to open the form modal
    await page.click('button[aria-label="want button"]');
    console.log('Clicked the "Want" button.');

    // Introduce a delay to wait for any client-side scripts to run
    await new Promise(r => setTimeout(r, 2000));

    // Wait for the form modal to appear
    await page.waitForSelector('#brand-main-page', { timeout: 30000 });
    console.log('The form modal has appeared.');

    // Fill out the form fields
    await page.type('input[name="name"]', 'John Doe');
    await page.type('input[name="email"]', 'john.doe@example.com');
    await page.type('input[name="company"]', 'Example Corp');
    await page.type('input[name="website"]', 'https://example.com');
    await page.select('select[name="country"]', 'USA');

    // Click the form submit button
    await page.click('.Modal_submitBrand__9yZp1');
    console.log('Form submitted.');

    // Wait for the HubSpot calendar iframe to appear
    await page.waitForSelector('.hubspot-calendar', { timeout: 30000 });
    console.log('HubSpot calendar iframe has appeared.');

    // Close the HubSpot calendar
    await page.click('.hubspot-calendar-close');
    console.log('Closed the HubSpot calendar.');

    // Wait for the "Thank you!" button to appear
    await page.waitForSelector('.Modal_modalCloseButton__FclDL', { timeout: 30000 });
    console.log('"Thank you!" button has appeared.');

    // Click the "Thank you!" button to close the form
    await page.click('.Modal_modalCloseButton__FclDL');
    console.log('Closed the form.');

  } catch (error) {
        // Log the error and re-throw it for further handling
        console.log(`Error in testForms: ${error}`);
        throw error;
    // Log the error and re-throw it for further handling
    console.log(`Error in testForms: ${error}`);
    throw error;
  }
}

// Export the testForms function
// Export the testForms function
export default {testForms};