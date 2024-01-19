exports.HomePage = 
class HomePage {
    constructor (page)
{
    this.page = page;
    this.productList = "//*[@id='tbodyid']/div/div/div/h4/a"
    this.addToCart = "//a[normalize-space()='Add to cart']"
    this.cartLink = '#cartur'
    this.homeLink = "//li[@class='nav-item active']//a[@class='nav-link']"
}

async addProdToCart(productName){
    const productList = await this.page.$$(this.productList)
    for(const prod of productList){
        if(productName=== await prod.textContent()){
            await prod.click()
            break;
        }
    }
    // await this.page.on('dialog',async dialog=>{
    //     if(dialog.message().includes('added')){
    //         await dialog.accept()
    //     }
        
    //   })
      await this.page.locator(this.addToCart).click()
}
async gotoHome(){
    await this.page.locator(this.homeLink).click()
}

async gotoCart(){
    await this.page.locator(this.cartLink).click()
}

}