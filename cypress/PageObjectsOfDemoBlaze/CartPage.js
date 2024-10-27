class CartPage {
    addToCart(productName) {
        cy.contains(productName).click();
        cy.get('[onclick="addToCart(4)"]').click();
        cy.wait(1000)
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Product added')
        });
    }
    navigateToCart() {
        cy.get('#cartur').click();
    }

    assertProductInCart(productName) {
        cy.contains(productName).should('be.visible');
    }
}
export default CartPage;
