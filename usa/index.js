const getStoreId = require("./getStoreId");

async function login(username, password, page) {
  // Fill in the username
  await page.fill("#usernameTextBox", username);

  // Fill in the password
  await page.fill("#passwordTextBox", password);
  await page.getByRole("button").click();
  await page.getByRole("textbox");
}

async function orderFromUSA(
  page,
  url,
  storeNumber,
  itemNumber,
  quantity,
  username,
  password
) {
  await page.goto(url);
  await login(username, password, page);
  await page.fill("#SelectDealerAutoComplete", storeNumber + " ");
  // Wait for the div containing the store number to be visible
  await page.waitForSelector(
    `div.divSelectDealerResult >> text=${storeNumber}`
  );

  // Click on the div containing the store number
  await page.click(`div.divSelectDealerResult >> text=${storeNumber}`);



  // await page.click("#btn-continue");

  //   await searchForItem(page, itemNumber, quantity);

  // Additional code to handle the search results
  // Example: Extract information from the search results page
  //   const itemDetails = await page.evaluate(() => {
  //     // Replace with the actual selector and logic to extract item details
  //     const item = document.querySelector('#itemDetailsSelector');
  //     return item ? item.innerText : null;
  //   });

  //   console.log('Item Details:', itemDetails);
}

module.exports = orderFromUSA;
