function getStoreNumber(storeNumber) {
    // Add leading zeroes based on the length of the storeNumber
    if (storeNumber.length === 1) {
      storeNumber = "000" + storeNumber;
    } else if (storeNumber.length === 2) {
      storeNumber = "00" + storeNumber;
    }
    else if (storeNumber.length === 3) {
      storeNumber = "0" + storeNumber;
    }
  
    return storeNumber;
  }

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
    await page.waitForTimeout(5000);
      // Retrieve all elements that match the text "Home Account"
  const clicker = await page.getByText('Home Account').all();

  // Wait for the last element to be visible
  const lastHomeAccount = clicker[clicker.length - 1];
  await lastHomeAccount.waitFor({ state: 'visible' });

  // Click on the last element
  await lastHomeAccount.click();

await page.keyboard.type(getStoreNumber(storeNumber))
    await page.keyboard.press("Enter")
    // await page.click("#panelCorporateAccounts select")
    // await page.fill("#panelCorporateAccounts .chosen-search > input", storeNumber );
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
  