const getStoreId = require("./getStoreId");

async function login(username, password, page) {
  // Fill in the username
  await page.getByRole("textbox", { name: "Username" }).fill(username);

  // // Fill in the password
  await page.getByRole("textbox", { name: "Password" }).fill(password);

  // //   Submit the form (assuming there is a login button with id 'loginButton')
  await page.getByRole("button", { name: /sign in/i }).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("Escape");
  // await page.click("#btn-login");
}

async function orderFromMFI(
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
  // const storeId = await getStoreId(storeNumber);
  //   console.log(storeId);
  // await page.fill("#select-location", storeId);
  // await page.click("#btn-continue");

  // await searchForItem(page, itemNumber, quantity);

  // Additional code to handle the search results
  // Example: Extract information from the search results page
  //   const itemDetails = await page.evaluate(() => {
  //     // Replace with the actual selector and logic to extract item details
  //     const item = document.querySelector('#itemDetailsSelector');
  //     return item ? item.innerText : null;
  //   });

  //   console.log('Item Details:', itemDetails);
}

module.exports = orderFromMFI;
