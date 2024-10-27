import LoginPage from "../../PageObjectsOfDemoBlaze/LoginPage";

describe('DemoBlaze Test', () => {
    // Create an instance of LoginPage
    const loginPage = new LoginPage();

    it('Login Test', () => {
        loginPage.siteVisit();
        loginPage.openLoginModal();
        loginPage.login();
        loginPage.assertLoginSuccess();
        loginPage.assertLoginOptionsVisible();
        loginPage.assertLoginModalClosed();
    });
});

