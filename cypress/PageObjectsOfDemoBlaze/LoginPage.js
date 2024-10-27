class LoginPage {
    siteVisit() {
        cy.visit('https://demoblaze.com/');
    }

    openLoginModal() {
        cy.get('#login2').click();
    }

    login() {
        cy.wait(500);
        cy.get('#loginusername').type('AnD' );
        cy.get('#loginpassword').type('An')
        cy.get('[onclick="logIn()"]').click()
    }

    assertLoginSuccess() {
        cy.get('#nameofuser').should("contain.text", 'Welcome AnD')

    }

    assertLoginOptionsVisible() {
        cy.get('#logout2').should('be.visible');
    }

    assertLoginModalClosed() {
        cy.get('#logInModal').should('not.be.visible');
    }
}

export default LoginPage
