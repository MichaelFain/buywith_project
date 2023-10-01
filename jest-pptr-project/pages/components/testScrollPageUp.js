/**
* Tests the functionality of scrolling up on a page.
* @param {Object} page - Puppeteer page object.
*/
async function testScrollPageUp(page){
   try {
       await page.evaluate(() => {
           window.scrollTo(0, 0);  // Scroll to the top of the page
           console.log('The page is scrolled up');
       });
   } catch (error) {
       console.log('Error in testScrollPageUp:', error);
       throw error;
   }
}

// Export the testScrollPageUp function
export default { testScrollPageUp };
