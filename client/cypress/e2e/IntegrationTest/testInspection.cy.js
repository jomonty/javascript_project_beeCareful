describe('Testing Inspections', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/colonies').wait(500)
        cy.contains('See details').click({force: true}).wait(500)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    })

    it('should be able to see the inspections without pressing show button if have any', () => {
        cy.get(':nth-child(1) > .card').should('not.be.visible')

    })

    it('should be able to see the inspections after pressing the show button in detail page if have any', () => {
        cy.contains('View Inspections').click({force: true})
        cy.get(':nth-child(1) > .card > .box').should('be.visible')

    })

    it('should be able to remove an inspection', () => {
        cy.contains('View Inspections').click({force: true})
        cy.get('.box').should('have.length', 3)
        cy.get(':nth-child(2) > .card > .box > .content > .btn-add-colony').click({force: true})
        cy.get('.box').should('have.length', 2)
    })

    it('should be able to add an inspection', () => {
        cy.contains('View Inspections').click({force: true})
        cy.contains('Add Inspection').click({force: true})
        cy.get('.box').should('have.length', 3)
    })

    it('should be able to add an inspection with the right details inserted', () => {
        cy.contains('View Inspections').click({force: true})
        cy.get('#queen-spotted').type('Yes')
        cy.get('#brood-spotted').type('No')
        cy.get('#honey-stores').type('32')
        cy.get('[type="text"]').type('testing')
        cy.contains('Add Inspection').click({force: true})
        cy.get('.box').should('have.length', 3)
        cy.get('.box').children().last().should('contain', 'Yes').should('contain', 'No').should('contain', '32').should('contain', 'testing')
    })
})
