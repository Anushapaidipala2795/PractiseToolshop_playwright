class HomePage
{
constructor(page)
{
    this.page=page
 this.categories=page.locator("*[data-test='nav-categories']")
    this.productslist=page.locator("a[href*='/product']")
   this.powerTools=page.locator("a[href*='/power-tools']")
   this.addtoCart=page.locator('#btn-add-to-cart') 
    this.toast = page.locator("//div[contains(@aria-label, 'Product added to shopping cart')]");
    this.cart= page.locator("a[routerlink='/checkout']")
} 
async prodctslistaddtocart()
{

  await this.categories.click();
await this.powerTools.click();
//const productslist=page.locator("a[href*='/product']")
  await this.productslist.first().waitFor();


 for(let i=0;i<await this.productslist.count();++i)
 {
   const itemtobeadded= await this.productslist.locator(".card-title").nth(i).textContent()
   await this.productslist.first().waitFor();
   if(itemtobeadded.includes('Sheet Sander') || itemtobeadded.includes('Circular Saw') || itemtobeadded.includes('Random Orbit Sander'))
   {
    await this.productslist.locator(".card-title").nth(i).click()
    //const addtoCart=page.locator('#btn-add-to-cart')
    await this.addtoCart.waitFor()
    await this.addtoCart.click()
    //const toast = page.locator("//div[contains(@aria-label, 'Product added to shopping cart')]");
  await this.toast.waitFor(); 
//await expect(toast).toBeVisible();
console.log(await this.toast.textContent())
    await this.page.goBack()

   }
 }
 await this.cart.click();
}

}
 module.exports= HomePage