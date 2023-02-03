describe('Input type text', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  beforeEach(() => {
    cy.visit('/automation-practice-form')
  })
  it('Input type text', () => {
    cy.get('#firstName').type('Brian')
    cy.get('#lastName').type('Calamateo')
    cy.get('#firstName').type('Daniel')
    cy.get('#lastName').type('{selectAll}{backspace}')
    cy.get('#firstName').clear()
  })
  it('check inputs', () => {
    // cy.get('form input').check(['Male'])
    cy.get('[type="radio"]').check('Male', { force: true })
    cy.get('[type="checkbox"]').check(['1', '3'], { force: true })
  })
  it.only('Get information', () => {
    const firstName = 'Daniel'
    cy.get('#firstName').as('name')
    cy.get('@name').type(firstName)

    cy.get('@name').then(($name) => {
      expect($name.val()).to.equal(firstName)
    })
  })
})