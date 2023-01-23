/// <reference types="Cypress"/>
Cypress. on('uncaught:exception', (err, runnable) => { return false; });
describe ("Ejemplo de Type pageUp y pageDown", () => {
    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type("{pageup}")
        cy.wait(2000)

    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)

    })

    //Para correr solo un método se pone .only 
    /*it.only("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").type("{pagedown}")
        cy.wait(2000)

    })*/

}) // Cierre de describe 