const { chromium } = require("playwright");
require("dotenv").config(); 
const prompt = require("prompt-sync")();
const orderFromATD = require("./atd");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Capture user input
  const vendor = prompt("Enter vendor (ATD or other): ").toUpperCase();
  const storeNumber = prompt("Enter store number: ");
  const itemNumber = prompt("Enter item number: ");
  const quantity = prompt("Enter quantity: ");

  // Vendor-specific configurations
  let websiteUrl, username, password;
  switch (vendor) {
    case "ATD":
      websiteUrl = process.env.ATD_URL;
      username = process.env.ATD_USERNAME;
      password = process.env.ATD_PASSWORD;
      await orderFromATD(page, websiteUrl, storeNumber, itemNumber, quantity, username, password);
      break;
    
    case "OTHER":
      // Add logic for other vendors here
      console.log("Other vendor functionality not implemented yet.");
      break;

    default:
      console.log("Invalid vendor. Please choose either 'ATD' or 'other'.");
      break;
  }

//   await browser.close();
})();
