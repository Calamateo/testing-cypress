describe('Test status', () => {
    it('should  validate status code', () => {
        cy.request('employees/20').its('status').should('eq', 200)
    })
    it('should validate status code 404', () => {
        cy.request({ url: 'employees/500', failOnStatusCode: false })
            .its('status')
            .should('eq', 404)
    })
    it('Delete element', () => {
        cy.request({ method: 'DELETE', url: 'employees/1', failOnStatusCode: false }).its('status').should('eq', 404)
    })
})