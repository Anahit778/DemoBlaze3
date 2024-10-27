import LoginPage from '../../PageObjectsOfDemoBlaze/LoginPage'
import CartPage from '../../PageObjectsOfDemoBlaze/CartPage'

describe('Cart Functionality Test', () => {
    // Create an instance
    const loginPage = new LoginPage()
    const cartPage = new CartPage()
    const productName = 'Samsung galaxy s7'

    beforeEach(() => {
        loginPage.siteVisit()
        loginPage.openLoginModal()
        loginPage.login()
    });

    it("should add a product to the cart and verify it's there", () => {
        cartPage.addToCart(productName)
        cartPage.navigateToCart()
        cartPage.assertProductInCart(productName)

    });
});
