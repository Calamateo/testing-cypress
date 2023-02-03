describe('Date pickers', () => {
    beforeEach(() => {
        cy.visit('https://material.angular.io/components/datepicker/overview')
    })
    it('Should pick a date', () => {
        cy.get('#mat-input-0').click({ force: true }).type('01/01/2022')
    })
})