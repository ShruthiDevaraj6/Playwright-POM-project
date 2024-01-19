exports.CartPage = 
class CartPage {
    constructor (page)
{
    this.page = page;
    this.noOfProducts = "//tbody[@id='tbodyid']/tr/td[2]"
}

async checkProdInCart(prodName){
    const productsInCart = await this.page.$$(this.noOfProducts)
    for(const product of productsInCart){
        console.log(await product.textContent())
        if(prodName=== await product.textContent()){
            return true;
            break;
        }
    }
}
}