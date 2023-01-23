/// <reference types="Cypress"/>
require('cypress-plugin-tab')
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("Ejemplo función Tab", () => {
    it("Type con un Tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#firstName').type("Kimberly").tab()
        .type("Sánchez").tab()
        .type("kimi_zan@gmail.com")
    })

}) // Cierre de describe 