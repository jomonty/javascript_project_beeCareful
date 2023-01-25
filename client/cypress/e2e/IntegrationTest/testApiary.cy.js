// describe('Testing Apiary showing things as expected', () => {
//     beforeEach(() => {
//         cy.visit('http://localhost:3000/').wait(500)
//     })

//     it('should be able to connect to the page', () => {
//         cy.get('title').should('contain', 'beeCareful®')

//     }),

//     it('should have three buttons with link in the NavBar', () => {
//         cy.get('.navbar > li > a').eq(0).should('have.attr', 'href', '/').and('contain', 'Currently Viewing: ')
//         cy.get(':nth-child(1) > a').should('have.attr', 'href', '/').and('contain', 'Apiaries')
//         cy.get(':nth-child(2) > a').should('have.attr', 'href', '/colonies').and('contain', 'Colonies')

//     })

//     it('should be able to choose apiary and show its name', () => {
//         cy.get('#btn-navbar-selected').should('contain', "Andrew's Apiary")

//         cy.get('div').contains("Michael's Apiary").parent().children('button').click()
//         cy.get('#btn-navbar-selected').should('contain', "Michael's Apiary")
    

//         cy.get('div').contains("Larry's Apiary").parent().children('button').click()
//         cy.get('#btn-navbar-selected').should('contain', "Larry's Apiary")

//         cy.get('div').contains("Josh's Apiary").parent().children('button').click()
//         cy.get('#btn-navbar-selected').should('contain', "Josh's Apiary")
//     })

//     it('should be able to directed to the Colonies page', () => {
//         cy.contains('Colonies').click()
//         cy.url().should('eq', 'http://localhost:3000/colonies')
//     })

// })