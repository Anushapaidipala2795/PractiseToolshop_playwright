import { test, expect } from '@playwright/test';

//multiple tabs example

test('multiple tabs', async ({ browser }) => {

    const newcontext = await browser.newContext();
    const page = await newcontext.newPage();

    await page.goto('https://leafground.com/window.xhtml');


    const [newtab] = await Promise.all
        (
            [
                newcontext.waitForEvent('page'),
                page.getByText("Open Multiple").click()

            ]
        );
    const tableHeader = await newtab.locator('.customers-table-header').textContent();
    console.log('Table header:', tableHeader);


})


//exmaple for pagination

test('pagination', async ({ page }) => {

    await page.goto('https://leafground.com/table.xhtml')


    const numofpages = await page.locator('.ui-paginator-pages a').count();
    const nextpage = page.locator("[aria-label='Next Page']");
    let k = 0;
    for (let i = 0; i < numofpages; i++) {

        if (await nextpage.isVisible()) {
            const names = await page.locator("tbody tr td[role='gridcell']:nth-of-type(1)").allTextContents();
            const cleanNames = names.map(n => n.replace(/^Name/, '').trim());
            console.log(cleanNames);
            await nextpage.click({ force: true });
            await page.locator("tbody tr td[role='gridcell']:nth-of-type(1)").first().waitFor();
            k += await page.locator("tbody tr td[role='gridcell']:nth-of-type(1)").count();
        }
        else break;

    }
    console.log(k)

})

//download the file example

test('Uploading the file', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');


    // Set the file into the input element
    await page.setInputFiles('#file-upload', 'D:\\Parrot.jpg');

    // Submit the form
    await page.locator('#file-submit').click();

    // Pause for debugging
    await page.pause();

})

test.only('Download the file', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');
const downloadpromise= page.waitForEvent('download');
await page.locator("[href*='download/random_data']").click();
const download= await downloadpromise;
await download.saveAs("D:\\randondata.txt");
await page.waitFor();
})


