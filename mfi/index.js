const getStoreId = require("./getStoreId");

async function login(username, password, page) {
  // Fill in the username
  await page.getByRole("textbox", { name: "Username" }).fill(username);

  // // Fill in the password
  await page.getByRole("textbox", { name: "Password" }).fill(password);

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

}

module.exports = orderFromMFI;
