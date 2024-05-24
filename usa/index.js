const getStoreId = require("./getStoreId");

async function login(username, password, page) {
  // Fill in the username
  await page.fill("#usernameTextBox", username);

  // Fill in the password
  await page.fill("#passwordTextBox", password);
  await page.getByRole("button").click();
  await page.getByRole("textbox");
}
async function searchForItem(page, itemNumber, quantity) {
  await page.fill("#tirepartField", itemNumber);
  await page.keyboard.press("Enter");
  //   const text = await page.getByRole("textbox", { placeholder: "###" }).all();
  await page.getByText(/Primary Warehouse*/i).click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.type(quantity);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");

  //   const targetElement = elements[2]; // Index 2 corresponds to the third element

  //   if (targetElement) {
  //     await targetElement.scrollIntoViewIfNeeded();
  //     await targetElement.fill('4'); // Example: fill with '4'
  //   }

  //   text.forEach((t, i) => {
  //     t.fill(`${i}`);
  //   });
  //   console.log(text);
  //   await page.getByRole("Button", {name : /order now/i})
  //     await page.click("#global-search-button");
  //     await page.getByRole("textbox", { name: "Qty" }).fill(quantity);
  //   //   console.log("we found qty");
  //     const addToCart = await page.getByText(" Add to cart ").all();
  //     await addToCart[1].click()
  //   //   console.log("add to cart");
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

  await searchForItem(page, itemNumber, quantity);

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
