import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

 await  page.locator(".radioButton").nth(2).click();
//await page.selectOption('select#dropdown-class-example', { value: 'option2' });
const option= page.locator("select#dropdown-class-example");
await option.selectOption("option2");
await page.locator('#checkbox-example').getByText('Option2').click();

page.on('dialog', dialog=> dialog.accept());
await page.locator("#confirmbtn").click();
const mousehover= page.locator("#mousehover").hover();
await page.locator(".mouse-hover-content").waitFor();
await page.locator(".mouse-hover-content").first().click();

const amount= page.locator(".tableFixHead tr td:nth-of-type(4)");
let sum=0;
const count=await amount.count();
for(let i=0;i<count;i++)
{
  const Actualamount= await amount.nth(i).textContent();
  sum += parseInt(Actualamount, 10);
   

}
console.log(sum);
const Totalamountlocator= await page.locator(".totalAmount").textContent();
const Totalamount=Totalamountlocator.split(":")[1].trim();
const  totalAmountNumber = parseInt(Totalamount, 10);
console.log(totalAmountNumber);
expect(sum).toBe(totalAmountNumber)
})
