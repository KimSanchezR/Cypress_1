/// <reference types="Cypress"/>
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("Introducción a los assert", () => {
    it("Demo de los asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#firstName').should("be.visible").type("Kim")
        cy.wait(1000)
        cy.get('#lastName').should("be.visible").type("Sánchez")
        cy.wait(1000)
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("example@gmail.com")
        
    })

}) // Cierre de describe 