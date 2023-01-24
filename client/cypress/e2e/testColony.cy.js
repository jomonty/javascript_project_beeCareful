describe('Testing Colonies', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/colonies')
    })

    it('should have two colony cards by default'), () => {
        cy.get('.colony-cards-wrapper').children().should('have.length', 2)
    }
})
