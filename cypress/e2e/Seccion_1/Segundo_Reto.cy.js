/// <reference types="Cypress"/>
require('cypress-plugin-tab')
require('cypress-xpath');
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("Segundo Reto", () => {
    it("Probando la app", () => {
        cy.visit("http://computer-database.gatling.io/computers");
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //Buscando
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //Agregando
        cy.get("#add").should("be.visible").click()
        cy.get("[name='name']").should("be.visible").type("Cypress")
        cy.wait(1000)
        cy.get('#introduced').should("be.visible").type("2021-03-15").tab().type("2025-03-15")
        cy.wait(1000)
        //combo
        cy.get('#company').should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get('.primary').should("be.visible").click()

        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("Cypress")
        cy.get("#searchsubmit").should("be.visible").click()
    })

}) // Cierre de describe 