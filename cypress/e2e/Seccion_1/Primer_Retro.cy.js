/// <reference types="Cypress"/>
Cypress. on('uncaught:exception', (err, runnable) => { return false; });
require('cypress-plugin-tab')

describe ("Primer Retro", () => {
    it("Parte 1", () => {
        cy.visit("https://demoqa.com/webtables");
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#searchBox').should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()

        //Agregando registro 
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.wait(1000)

        cy.get('#firstName').should("be.visible").type("Kim").tab()
        .type("Sánchez").tab()
        .type("kim@gmail.com").tab()
        .type("25").tab()
        .type("550000").tab()
        .type("TI")
        cy.get('#submit').should("be.visible").click()

        cy.get('#searchBox').should("be.visible").type("Kim")
        cy.wait(1000)
        cy.get('#searchBox').should("be.visible").clear()

        //Editar un registro 
        cy.get('#edit-record-2').should("be.visible").click()
        cy.wait(1000)
        cy.get('#age').should("be.visible").clear().type("50")
        cy.wait(1500)
        cy.get('#salary').should("be.visible").clear().type("50000")
        cy.get('#submit').should("be.visible").click()

        //Eliminar un registro
        cy.wait(2000)
        cy.get('#delete-record-2').should("be.visible").click()
    })

}) // Cierre de describe 