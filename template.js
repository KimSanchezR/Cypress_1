/// <reference types="Cypress"/>
require('cypress-plugin-tab')
require('cypress-xpath');
import 'cypress-file-upload';
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe ("", () => {
    it("", () => {
        cy.visit("");

    })

}) // Cierre de describe 