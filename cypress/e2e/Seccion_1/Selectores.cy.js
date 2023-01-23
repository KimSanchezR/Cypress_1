/// <reference types="Cypress"/>
require('cypress-plugin-tab')
require('cypress-xpath');
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("Tipos de Selectores", () => {
    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible", {timeout:5000}).type("Kim") // el timeout aqui es para hacer que el asserts espere un valor
        cy.get("#userEmail").should("be.visible").type("Kim@gmail.com")
    })

    it("Selector por Atributo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Kim Sánchez Ramírez")
    })

    
    it("Selector por Xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Kim Sánchez Ramírez")
        cy.wait(1000)
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("Kim@gmail.com")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Cartago")
    })

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
        cy.wait(1000)
    })

    it.only("Selector por CopySelector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("88997766")
        cy.wait(1000)
    })

}) // Cierre de describe 