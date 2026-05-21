class CheckOutPage{
    constructor(page){
        this.page=page
        this.proceedOption= page.getByRole('button', { name: 'Proceed to checkout' })
    }

    async checkout()
    {  

await this.proceedOption.waitFor();
await this.proceedOption.click();
await this.page.pause();
    }
}
module.exports=CheckOutPage;