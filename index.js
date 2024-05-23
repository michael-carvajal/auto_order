const { chromium } = require("playwright");
require("dotenv").config(); // Load environment variables from .env file
const orderFromATD = require("./atd");

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set to true if you don't need to see the browser
  const page = await browser.newPage();

  // Input values
  const websiteUrl = process.env.ATD_URL;
  const username = process.env.ATD_USERNAME;
  const password = process.env.ATD_PASSWORD;
  const storeNumber = "1"; // Replace with the actual store number
  const itemNumber = "81501"; // Replace with the actual tire item number
  const  quantity = "4";

  await orderFromATD(page, (url = websiteUrl), storeNumber, itemNumber, quantity, username, password, itemNumber);

  //   await browser.close();
})();
