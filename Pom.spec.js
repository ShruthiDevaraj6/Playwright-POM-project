import { test, expect } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';
import { CartPage } from './Pages/CartPage';

test('Test1', async ({page}) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol','test@123')
    await page.waitForTimeout(3000)
    
    
    const home = new HomePage(page)
    await home.addProdToCart("Sony xperia z5")
    await page.waitForTimeout(3000)
    await home.gotoHome()
    await page.waitForTimeout(3000)
    await home.addProdToCart("Samsung galaxy s6")
    await home.gotoCart()
    
    
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProdInCart('Samsung galaxy s6')
    expect (await status).toBe(true)
  
})
