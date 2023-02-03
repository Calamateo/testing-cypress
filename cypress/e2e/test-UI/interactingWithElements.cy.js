describe('Interaction whith elements', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('/buttons')
    })
    it('Clicks a buttons', () => {
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible')
    })
    it('Double click', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible')
    })
    it('Right click', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible')
    })
    it('Force click', () => {
        cy.visit('/dynamic-properties')
        cy.get('#enableAfter').click({ timeout: 0, force: true }).should('be.visible')
    })
})