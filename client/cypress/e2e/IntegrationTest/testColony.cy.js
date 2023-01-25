describe('Testing Colonies', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/colonies').wait(500)
    })

    // it('should have two colony cards by default', () => {
    //     cy.get('.colony-cards-wrapper').children().should('have.length', 2)
    // })

    // it('should have details in two flipcard', () => {
    //     cy.get('.flip-card-back').children().should('have.length', 10)
    // })

    // it('button could only be found when hover on the card', () => {
    //     cy.get('button').contains('See details').should('not.be.visible')
    // })

    // it('button could be found when hover on the card', () => {
    //     cy.get("button").contains('See details').click({force: true});   
    //  })

    // it('should be able to type in the name input', () => {
    //     cy.get('.input').should('be.empty')
    //     cy.get('.input').type("test").wait(500)
    //     cy.get('.input').should('have.value', "test")
    //  })

    // it('should be able to type in the queen name input', () => {
    //     cy.get('[name="queenName"]').should('be.empty')
    //     cy.get('[name="queenName"]').type("test").wait(500)
    //     cy.get('[name="queenName"]').should('have.value', "test")
    //  })

    //  it ('should be able to type in the queen date of birth input', () => {
    //     // cy.get('[type="date"]').click()
    //     cy.get('[type="date"]').invoke('val', '00-00-0000');
    //     // cy.get('[type="date"]').type("0000-00-00").wait(1000)
    //     cy.get('[type="date"]').should('have.value', "00-00-0000")
    //  })

    it('should be able to add colony', () => {
        cy.get('.colony-cards-wrapper').children().should('have.length', 2)
        cy.get('.form-wrapper > .btn-add-colony').click()
        cy.get('.colony-cards-wrapper').children().should('have.length', 3)
    })

    it('should be able to remove colony', () => {
        // cy.get(':nth-child(4) > .flip-card-inner > .flip-card-back > .colony-card-buttons > .btn-add-colony').click({force: true})
        cy.get('button').contains('Remove Colony').click({force: true})
        cy.get('.colony-cards-wrapper').children().should('have.length', 2)
        
    })

    it('should be able to add colony with right detail added', () => {
        cy.get('.colony-cards-wrapper').children().should('have.length', 2)
        cy.get('.input').type("test").wait(500)
        cy.get('[name="queenName"]').type("test").wait(500)
        cy.get('.form-wrapper > .btn-add-colony').click()
        cy.get(':nth-child(3) > .flip-card-inner > .flip-card-front > .title').should('contain', 'Name: test')
        cy.get(':nth-child(3) > .flip-card-inner > .flip-card-back > #colony-card-txt').should('contain', 'Queen Name: test')
    })

    // it('should be able to see the datail of the colony', () => {
    //     cy.get("button").contains('See details').click({force: true})
    //     cy.url()
    // })
})


