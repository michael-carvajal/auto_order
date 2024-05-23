const { chromium } = require("playwright");
require("dotenv").config(); // Load environment variables from .env file
const orderFromATD = require("./atd");

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set to true if you don't need to see the browser
  const page = await browser.newPage();

  // Function to search for the tire item
  async function searchForItem(tireItemNumber) {
    await page.fill("#searchBarSelector", tireItemNumber); // Replace with the actual selector for the search bar
    await page.press("#searchBarSelector", "Enter"); // Simulate pressing the Enter key
  }

  // Input values
  const websiteUrl = process.env.ATD_URL;
  const username = process.env.ATD_USERNAME;
  const password = process.env.ATD_PASSWORD;
  const storeNumber = "1"; // Replace with the actual store number
  const tireItemNumber = "81501"; // Replace with the actual tire item number

  await orderFromATD(page, (url = websiteUrl), storeNumber, username, password);

  //   await searchForItem(tireItemNumber);

  // Additional code to handle the search results
  // Example: Extract information from the search results page
  //   const itemDetails = await page.evaluate(() => {
  //     // Replace with the actual selector and logic to extract item details
  //     const item = document.querySelector('#itemDetailsSelector');
  //     return item ? item.innerText : null;
  //   });

  //   console.log('Item Details:', itemDetails);

  //   await browser.close();
})();
