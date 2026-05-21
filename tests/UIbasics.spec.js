//const {test}=require('@playwright/test');
import { test, expect } from '@playwright/test';

test.skip('first playwright test',async ({page})=>
    {
await page.goto("https://www.udemy.com/course/playwright-tutorials-automation-testing/learn/lecture/31110444#overview");
console.log(page.textContent);

    });

    test.skip('locator practise',async ({page})=>
    {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("Sravan@gmail.com");
await page.locator("#userPassword").fill("Anusha@2020");
await page.locator("#login").click();
await page.locator(".card-body b").first().waitFor();
console.log(await page.locator(".card-body b").nth(2).textContent());

    });
 test.skip('child class',async ({browser})=>
    {
        const context= await browser.newContext();
        const page= await context.newPage();
        const username=  page.locator("#username");
        await page.goto(" ");
 const doucumentLink=page.locator("a[href*='documents-request']");
const [page2]=await  Promise.all (
    [ 
 context.waitForEvent('page'),
 doucumentLink.click(),

   ] )
   const sentence=await page2.locator(".red").textContent();
   const domain=sentence.split("@");
   const name= domain[1].split(" ")[0];
//console.log(name);
   await page.locator("#username").fill(name);

console.log(await page.locator("#username").inputValue());


    });

    test('finding order id',async ({page})=>
    {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("Sravan@gmail.com");
await page.locator("#userPassword").fill("Anusha@2020");
await page.locator("#login").click();
await page.locator(".card-body b").first().waitFor();
console.log(await page.locator(".card-body b").nth(2).textContent());

await page.locator(".card-body .fa.fa-shopping-cart").first().click();
await page.locator(".card-body .fa.fa-shopping-cart").nth(1).click();
await page.locator("button[routerlink*='cart']").click();
await page.locator("text=Checkout").click();
await page.locator(".form-group .input").pressSequentially("Ind");
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionscount= await dropdown.locator("button").count();
for(let i=0;i<optionscount;++i)
{
    const text= await dropdown.locator("button").nth(i).textContent();
    if(text === " India")
    {
        await dropdown.locator("button").nth(i).click();
    break;
    }
}
//await page.pause();

    await page.locator(".action__submit").waitFor();
    await page.locator(".action__submit").click();
    //await page.pause();
   // const oderId= await page.locator("text= | 69cac0dcf86ba51a6537c5f7 | ");
   // console.log(oderId);
    await page.locator("[routerlink='/dashboard/myorders']").first().click();
    //await page.pause();
    const rowcontent=await page.locator(".ng-star-inserted [scope='row']").allTextContents();
    
    const rows=  page.locator("tbody tr");
    for(let i=0;i< await rows.count();++i)
    {
const rowsId =await rows.nth(i).textContent();
        if(rowsId === "69cac0dcf86ba51a6537c5f7")
            console.log(" await expect(rowsId.includes('69cac0dcf86ba51a6537c5f7')).toBeTruthy()");
     console.log("true")
           break;
    }
//console.log(await count.nth(i));
    //console.log( await page.locator(".ng-star-inserted [scope='row']").nth(i));
    await page.pause();
    await page.locator("text=View").click();
    await page.pause();

}
)