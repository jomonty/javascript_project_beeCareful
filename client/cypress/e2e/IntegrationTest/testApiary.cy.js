describe('Testing Apiary showing things as expected', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/').wait(2000)
    })

    it('should be able to connect to the page', () => {
        cy.get('title').should('contain', 'beeCareful®')

    }),

    it('should have two buttons with link in the NavBar', () => {
        cy.get('.navbar').children().should('have.length', 2)
        cy.get('.navbar a').eq(0).should('have.attr', 'href', '/').and('contain', 'Apiaries')
        cy.get('.navbar a').eq(1).should('have.attr', 'href', '/colonies').and('contain', 'Colonies')

    })

    it('should be able to choose apiary and show its name', () => {
        cy.get('.header').should('contain', "Andrew's Apiary")
        cy.get('.class-name-true').should('contain', "Andrew's Apiary")

        cy.get('div').contains("Michael's Apiary").parent().children('button').click()
        cy.get('.class-name-true').should('contain', "Michael's Apiary")
        cy.get('.header h3').should('contain', "Michael's Apiary")
    

        cy.get('div').contains("Larry's Apiary").parent().children('button').click()
        cy.get('.class-name-true').should('contain', "Larry's Apiary")
        cy.get('.header h3').should('contain', "Larry's Apiary")

        cy.get('div').contains("Josh's Apiary").parent().children('button').click()
        cy.get('.class-name-true').should('contain', "Josh's Apiary")
        cy.get('.header h3').should('contain', "Josh's Apiary")
    })

    it('should be able to directed to the Colonies page', () => {
        cy.contains('Colonies').click()
        cy.url().should('eq', 'http://localhost:3000/colonies')
    })

})