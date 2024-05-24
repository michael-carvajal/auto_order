const { chromium } = require("playwright");
require("dotenv").config();
const prompt = require("prompt-sync")();
const orderFromATD = require("./atd");
const orderFromMFI = require("./mfi");
const orderFromUSA = require("./usa");
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Capture user input
  const vendor = prompt("Enter vendor (ATD or other): ").toUpperCase().trim();
  const storeNumber = prompt("Enter store number: ").trim();
  const itemNumber = prompt("Enter item number: ").trim();
  const poNumber = prompt("Enter PO number: ").trim();
  const quantity = prompt("Enter quantity: ").trim();

  // Vendor-specific configurations
  let websiteUrl, username, password;
  switch (vendor) {
    case "ATD":
      websiteUrl = process.env.ATD_URL;
      username = process.env.ATD_USERNAME;
      password = process.env.ATD_PASSWORD;
      await orderFromATD(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber
      );
      break;

    case "MFI":
      websiteUrl = process.env.MFI_URL;
      username = process.env.MFI_USERNAME;
      password = process.env.MFI_PASSWORD;
      await orderFromMFI(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber
      );

      break;
    case "USA":
      websiteUrl = process.env.USA_URL;
      username = process.env.USA_USERNAME;
      password = process.env.USA_PASSWORD;
      await orderFromUSA(
        page,
        websiteUrl,
        storeNumber,
        itemNumber,
        quantity,
        username,
        password,
        poNumber
      );

      break;

    default:
      console.log("Invalid vendor. Please choose either 'ATD' or 'other'.");
      break;
  }

  //   await browser.close();
})();
