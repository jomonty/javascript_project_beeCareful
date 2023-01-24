import { useLinkClickHandler } from "react-router-dom"

describe('Testing Apiary functions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should be able to connect to the page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('title').should('contain', 'beeCareful®')

    })

    it('should have two links in the NavBar', () => {
        cy.get('.App > ul').children().should('have.length', 2)
        cy.get('.App > ul').contains('Home').should('have.attr', 'href', '/')
        cy.get('.App > ul').contains('Colonies').should('have.attr', 'href', '/colonies')
    })

    it('should be able to be directed to the Home page', () => {
        cy.contains('Home').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('should be able to directed to the Colonies page', () => {
        cy.contains('Colonies').click()
        cy.url().should('eq', 'http://localhost:3000/colonies')
    })

})