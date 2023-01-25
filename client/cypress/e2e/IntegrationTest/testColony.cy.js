describe('Testing Colonies', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/colonies').wait(500)
    })

    // it('should have two colony cards by default', () => {
    //     cy.get('.colony-cards-wrapper').children().should('have.length', 3)
    // })

    // it('should have details in two flipcard', () => {
    //     cy.get('.flip-card-back').children().should('have.length', 9)
    // })

    // it('button could only be found when hover on the card', () => {
    //     cy.get('button').contains('See details').should('not.be.visible')
    // })

    // it('button could be found when hover on the card', () => {
    //     cy.get("button").contains('See details').click({force: true});   
    //  })

    // it('should be able to type in the input', () => {
    //     cy.get('.input').should('be.empty')
    //     cy.get('.input').type("test").wait(500)
    //     cy.get('.input').should('have.value', "test")

    //     cy.get('[name="queenName"]').should('be.empty')
    //     cy.get('[name="queenName"]').type("test").wait(500)
    //     cy.get('[name="queenName"]').should('have.value', "test")
    //  })

    // //  it ('should be able to type in the queen date of birth input', () => {
    // //     // cy.get('[type="date"]').click()
    // //     cy.get('[type="date"]').invoke('val', '00-00-0000');
    // //     // cy.get('[type="date"]').type("0000-00-00").wait(1000)
    // //     cy.get('[type="date"]').should('have.value', "00-00-0000")
    // //  })

    // it('should be able to add colony', () => {
    //     cy.get('.colony-cards-wrapper').children().should('have.length', 3)
    //     cy.get('.form-wrapper > .btn-add-colony').click()
    //     cy.get('.colony-cards-wrapper').children().should('have.length', 4)
    // })

    // it('should be able to remove colony', () => {
    //     cy.get('button').contains('Remove Colony').click({force: true})
    //     cy.get('.colony-cards-wrapper').children().should('have.length', 3)
        
    // })

    // it('should be able to add colony with right detail added', () => {
    //     cy.get('.colony-cards-wrapper').children().should('have.length', 3)
    //     cy.get('.input').type("test").wait(500)
    //     cy.get('[name="queenName"]').type("test").wait(500)
    //     cy.get('.form-wrapper > .btn-add-colony').click()
    //     cy.get(':nth-child(4) > .flip-card-inner > .flip-card-front > .title').should('contain', 'test')
    //     cy.get(':nth-child(4) > .flip-card-inner > .flip-card-back > #colony-card-txt').should('contain', 'test')
    // })

    // it('should have five weather forecast showing', () => {
    //     cy.get('.weather-forecast-wrapper').children().should('have.length', 5)
    // })

    it('should be able to direct to the detail page', () => {
        cy.get("button").contains('See details').click({force: true})
        cy.url().should('not.equal', 'http://localhost:3000/colonies')
    })

    it('should be able to see the datail of the colony', () => {
        cy.get(':nth-child(1) > .flip-card-inner > .flip-card-front > .title').should('contain', 'West Ckeya')
        cy.get(':nth-child(1) > .flip-card-inner > .flip-card-back > #colony-card-txt').should('contain', 'Brenda')

        cy.get("button").contains('See details').click({force: true})

        cy.get('.single-colony-card').should('contain', 'Colony Name:').and('contain', 'Queen Birth Month:').and('contain', 'Queen Name:')

        
    })

    // it('should be able to direct to the edit colony page', () => {
    //     cy.get('.btn-add-colony').contains('Edit').click({force: true})
    //     cy.url().should('not.equal', 'http://localhost:3000/colonies')
    // })

    // it('should be able to type in the edit page', () => {
    //     cy.get('.input').should('be.empty')
    //     cy.get('.input').type("test").wait(500)
    //     cy.get('.input').should('have.value', "test")

    //     cy.get('[name="queenName"]').should('be.empty')
    //     cy.get('[name="queenName"]').type("test").wait(500)
    //     cy.get('[name="queenName"]').should('have.value', "test")
    // })

    // it('should be able to redirect back to the colonies page when confirm changes', () => {
    //     cy.get('.btn-add-colony').contains('Edit').click({force: true})
    //     cy.get('.btn-add-colony').click().wait(500)
    //     cy.url().should('equal', 'http://localhost:3000/colonies')
    // })

    // it('should be able to edit the details of the colony', () => {
    //     cy.get(':nth-child(1) > .flip-card-inner > .flip-card-front > .title').should('contain', 'West Ckeya')
    //     cy.get(':nth-child(1) > .flip-card-inner > .flip-card-back > #colony-card-txt').should('contain', 'Brenda')

    //     cy.get('.btn-add-colony').contains('Edit').click({force: true})
    //     cy.get('[name="name"]').should('be.empty')
    //     cy.get('[name="name"]').clear().type("newName").wait(500)

    //     cy.get('[name="queenName"]').should('be.empty')
    //     cy.get('[name="queenName"]').clear().type("newQueenName").wait(500)

    //     cy.get('.btn-add-colony').click().wait(500)

    //     cy.get(':nth-child(1) > .flip-card-inner > .flip-card-front > .title').should('contain', 'newName')
    //     cy.get(':nth-child(1) > .flip-card-inner > .flip-card-back > #colony-card-txt').should('contain', 'newQueenName')
    // })
})


