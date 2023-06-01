describe('Form Submission', () => {
    beforeEach(() => {
        
        cy.visit(' http://localhost:3000');
    });

    it('fills the name input', () => {
        const inputName = 'Test Name';
        cy.get('input[name="username"]')
            .type(inputName)
            .should('have.value', inputName);
    });

    it('fills the email input', () => {
        const inputEmail = 'test@test.com';
        cy.get('input[name="email"]')
            .type(inputEmail)
            .should('have.value', inputEmail);
    });

    it('fills the password input', () => {
        const inputPassword = 'Test123!';
        cy.get('input[name="password"]')
            .type(inputPassword)
            .should('have.value', inputPassword);
    });

    it('checks the terms of service box', () => {
        cy.get('input[name="tos"]')
            .check()
            .should('be.checked');
    });

    it('submits the form', () => {
        cy.get('input[type="submit"]')
            .click();
        
    });

    it('validates if an input is left empty', () => {
        
        cy.get('input[name="username"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('input[name="email"]').clear();

        cy.get('input[type="submit"]')
            .click();

        cy.contains('Username is required')
            .should('be.visible');
    });
});
