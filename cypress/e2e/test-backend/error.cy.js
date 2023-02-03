describe('Test errors', () => {
    it('Validate failed status code and message error', () => {
        cy.request({ url: 'https://pokeapi.co/api/vw/4545', failOnStatusCode: false }).then(response => {
            expect(response.status).to.equal(404)
            expect(response.statusText).to.equal('Not Found')
        })
    })
})