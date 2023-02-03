describe('test to body', () => {
    it('should  validate status code', () => {
        const id = 30;
        cy.request(`employees/${id}`).its('body.id').should('eq', id)
    })
})