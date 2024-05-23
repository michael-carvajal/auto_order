const getStoreId = require("./storeNumberAndIDS");

// Function to login
async function login(username, password, page) {
  // Fill in the username
  await page.fill("#j_username", username);

  // Fill in the password
  await page.fill("#j_password", password);

  //   Submit the form (assuming there is a login button with id 'loginButton')
  await page.click("#btn-login");
}

// Function to search for the tire item
async function searchForItem(tireItemNumber) {
  await page.fill("#searchBarSelector", tireItemNumber); // Replace with the actual selector for the search bar
  await page.press("#searchBarSelector", "Enter"); // Simulate pressing the Enter key
}

async function orderFromATD(page, url, storeNumber, username, password) {
  await page.goto(url);
  await login(username, password, page);
  const storeId = await getStoreId(storeNumber);
  //   console.log(storeId);
  await page.fill("#select-location", storeId);
  await page.click("#btn-continue");

  //   await searchForItem(tireItemNumber);

  // Additional code to handle the search results
  // Example: Extract information from the search results page
  //   const itemDetails = await page.evaluate(() => {
  //     // Replace with the actual selector and logic to extract item details
  //     const item = document.querySelector('#itemDetailsSelector');
  //     return item ? item.innerText : null;
  //   });

  //   console.log('Item Details:', itemDetails);
}

module.exports = orderFromATD;
