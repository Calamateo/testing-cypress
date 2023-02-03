describe('Assertions', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('/automation-practice-form')
    })
    it('Assertion', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
        cy.get('#lastName').then((lastName) => {
            cy.wrap(lastName).should('be.visible')
            expect(lastName).to.have.attr('placeholder', 'Last Name')
            assert.equal(lastName.attr('placeholder'), 'Last Name', 'Response')
        })
    })
})