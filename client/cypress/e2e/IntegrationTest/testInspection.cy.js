describe('Testing Inspections', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/colonies').wait(500)
        cy.get("button").contains('See details').click({force: true}).wait(500)
    })

    it('should be able to see the inspections without pressing show button if have any', () => {
        cy.get(':nth-child(1) > .card').should('not.be.visible')

    })

    it('should be able to see the inspections after pressing the show button in detail page if have any', () => {
        cy.get('🔎 View Inspections 🔍').click({force: true})
        cy.get(':nth-child(1) > .card > .box').should('be.visible')

    })
})
