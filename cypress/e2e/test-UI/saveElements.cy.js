describe('Saving elements', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('/automation-practice-form')
    })
    it('Replay', () => {
        // Obteniendo el element padre
        cy.get('input[placeholder="First Name"]').parent()
        // Obteniendo los element padres
        cy.get('input[placeholder="First Name"]').parents()
        cy.get('input[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')
    })
    it('Cancel replay', () => {
        cy.get('input[placeholder="First Name"]').parents('form').then((form) => {
            // Se declaran los element a guardar para poder ser utilizados despues, se guardan como tipo JQuery
            const inputs = form.find('input');
            const divs = form.find('div');
            const labels = form.find('label');
            // Se hace el expectation para verificar el element
            expect(inputs.length).to.eq(15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)
            // Se wrapea el valor a tipo Cypress para poder ser usado con su sintaxis
            cy.wrap(inputs).should('have.length', 15)
            cy.wrap(divs).should('have.length', 70)
            cy.wrap(labels).should('have.length', 16)

            cy.task('log', divs.length)
        })
    })
})