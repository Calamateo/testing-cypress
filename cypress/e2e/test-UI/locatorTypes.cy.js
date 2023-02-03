describe('Locator types', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    beforeEach(() => {
        cy.visit('/automation-practice-form')
    })
    it('Get by tag', () => {
        cy.get('input')
    })
    it('Get by attribute', () => {
        // cy.visit('/automation-practice-form')
        cy.get('[placeholder="First Name"]')
    })
    it('Get by attribute', () => {
        cy.get('#firstName')
    })
    it('Using parents', () => {
        // Obteniendo el element padre
        cy.get('input[placeholder="First Name"]').parent()
        // Obteniendo los element padres
        cy.get('input[placeholder="First Name"]').parents()
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')
    })
})