describe('Test method request', function () {
    beforeEach(function () {
        cy.fixture('data.json')
            .then(employee => {
                this.employee = employee;
            })
        cy.fixture('employeeUpdate.json')
            .then(updateEmployee => {
                this.updateEmployee = updateEmployee;
            })
    })
    it('Create a new employee', function () {
        cy.request({
            url: 'employees',
            method: 'POST',
            body: this.employee
        })
            .then(response => {
                const body = response.body;
                const status = response.status;
                cy.wrap(body.id).as('id')
                cy.wrap(status).should('eq', 201)
            })
    })
    it('Validate data', function () {
        cy.request(`employees/${this.id}`)
            .then(response => {
                const lastName = response.body.last_name
                expect(lastName)
                    .to.deep.equal(this.employee.last_name)
            })
    })
    it('Update data', function () {
        cy.request({
            url: `employees/${this.id}`,
            method: 'PATCH',
            body: this.updateEmployee
        })
            .its('body.last_name')
            .should('eq', this.updateEmployee.last_name)
    })
    it('Delete data', function () {
        cy.request('DELETE', `employees/${this.id}`)
            .its('status')
            .should('eq', 200)
    })
})