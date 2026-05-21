import { test, expect } from '@playwright/test';
import LoginPage from '../PageObjecttmodel/LoginPage.js';
import HomePage from '../PageObjecttmodel/HomePage.js';
import CheckOutPage from '../PageObjecttmodel/CheckOutPage.js';
const data= JSON.parse(JSON.stringify(require('../Utils/Testdata.json')));

for(const metadata of data ){
test(`home page ${metadata.Email}`, async ({ page }) => {
  // const Email = 'testuser123@gmail.com';
  // const Pass = 'Playwright@2020';
  const login = new LoginPage(page);
  await login.gotoPage();
  await login.loginToWebsite(metadata.Email, metadata.Pass);
const home = new HomePage(page);
await home.prodctslistaddtocart();
const checkoutproducts=new CheckOutPage(page)
await checkoutproducts.checkout() 

/*const itemprice= page.locator("span[data-test='product-price']").allTextContents
await itemprice.first().waitFor();
const itemcount=await itemprice.count()
let  sum=0;
for(let i=0;i<itemcount;++i)
{
    const priceofitem=await itemprice.nth(i).textContent()
console.log(priceofitem)
const totalPrice = parseInt(priceofitem.replace(/[^0-9]/g, ""), 10);


  sum+=totalPrice;
  console.log(sum)
}

//console.log(sum) */

// const proceedOption= page.getByRole('button', { name: 'Proceed to checkout' })
// await proceedOption.waitFor();
// await proceedOption.click();
// await page.pause();



})
}
