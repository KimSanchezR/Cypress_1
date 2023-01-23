/// <reference types="Cypress" />

describe ("Funciones para Type", () => {
    it("Type - Enter", () => {
        cy.visit("https://www.google.com/");
        cy.title().should('eq','Google')
        cy.wait(1500)

        cy.get("[name='q']").type("Cypress io {enter}")
        cy.wait(1500)
        cy.get('[href="https://www.cypress.io/"] > .LC20lb').click()
        
    })

}) // Cierre de describe 