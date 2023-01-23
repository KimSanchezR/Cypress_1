/// <reference types="Cypress"/>

const { should } = require('chai');

require('cypress-plugin-tab')
require('cypress-xpath');
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("Nueva Sección Checkbox", () => {
    it("Check 1", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    })

    it("Check por Selección", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(1000)

        //cy.get("#isAgeSelected").check().should("be.checked")
        //cy.xpath("(//input[contains(@type, 'checkbox')])[5]").check().should("be.checked")

        //cy.get("#isAgeSelected").click()
        //cy.xpath("(//input[contains(@type, 'checkbox')])[5]").click()
    })

    it.only("Radios Button", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html");
        cy.title().should("eq","Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(1000)

        cy.get(".panel-body > :nth-child(3) > input").check()
        cy.get(".panel-body > :nth-child(3) > input").click()
    })


}) // Cierre de describe 