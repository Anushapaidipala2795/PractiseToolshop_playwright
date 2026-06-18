import {test,expect} from '@playwright/test';

test.skip('Amazon website',async({page})=>{
await page.goto('https://www.amazon.in/');
//await page.locator("//div[text()='EN']").hover();
// await page.locator("(//a[contains(@href,'US')])[1]").waitFor();
// await page.locator("(//a[contains(@href,'US')])[1]").click();
  await page.locator("div .nav-search-field input").waitFor(); 
await page.locator("div .nav-search-field input").pressSequentially("bottles");
await page.locator(".left-pane-results-container div[aria-label='bottles']").waitFor()
await page.locator(".left-pane-results-container div[aria-label='bottles']").click();

})

