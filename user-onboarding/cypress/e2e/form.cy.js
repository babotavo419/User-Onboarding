describe('Form Submission', () => {
    beforeEach(() => {

        cy.visit('http://192.168.1.216:3000');
    });

    it('fills the name input', () => {
        const inputName = 'Test Name';
        cy.get('name')
            .type(inputName)
            .should('have.value', inputName);
    });

    it('fills the email input', () => {
        const inputEmail = 'test@test.com';
        cy.get('email')
            .type(inputEmail)
            .should('have.value', inputEmail);
    });

    it('fills the password input', () => {
        const inputPassword = 'Test123!';
        cy.get('password')
            .type(inputPassword)
            .should('have.value', inputPassword);
    });

    it('checks the terms of service box', () => {
        cy.get('tos')
            .check()
            .should('be.checked');
    });

    it('submits the form', () => {
        cy.get('submit')
            .click();
        
    });

    it('validates if an input is left empty', () => {
        cy.get('submit')
            .click();

        cy.get('error')
            .should('be.visible');
    });
});
