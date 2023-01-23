/// <reference types="Cypress"/>
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("Opciones de Click", () => {
    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")

        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').should("be.visible").click()
    })

    it("Click Force True", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")

        cy.get('.oxd-button').should("be.visible").click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible").click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').should("be.visible").click({force: true})
    })

    it.only("Click por coordenadas (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").type("admin123")

        cy.get('.oxd-button').should("be.visible").click()
        cy.wait(1500)
        cy.get('.oxd-topbar-header-title').should("be.visible").click(50,5)
        cy.get('.oxd-topbar-header-title').should("be.visible").click(70,25)
    })

}) // Cierre de describe 