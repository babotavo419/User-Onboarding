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
        // Validate form submission here. For instance, you might assert that you've navigated to a new page or that a particular element is now visible.
    });

    it('validates if an input is left empty', () => {
        cy.get('submit')
            .click();

        // Assuming the form shows an error element with id "error" when an input is left empty
        cy.get('error')
            .should('be.visible');
    });
});
