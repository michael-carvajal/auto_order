async function login(username, password, page) {
    // Fill in the username
    await page.fill("#fldAccount", username);
  
    // Fill in the password
    await page.fill("#fldPassword", password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    // await page.getByRole("textbox");
  }


async function orderFromNTW(
    page,
    url,
    storeNumber,
    itemNumber,
    quantity,
    username,
    password, 
    poNumber
  ) {
    await page.goto(url);
    await login(username, password, page);
//     await page.fill("#SelectDealerAutoComplete", storeNumber + " ");
//     // Wait for the div containing the store number to be visible
//     await page.waitForSelector(
//       `div.divSelectDealerResult >> text=${storeNumber}`
//     );
  
//     // Click on the div containing the store number
//     await page.click(`div.divSelectDealerResult >> text=${storeNumber}`);
  
//     await searchForItem(page, itemNumber, quantity);
//     await page.fill("#inputPurchaseOrder", poNumber)
  
  }
  
module.exports = orderFromNTW;
  