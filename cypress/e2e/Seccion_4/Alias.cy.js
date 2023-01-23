
/// <reference types="Cypress" />

//https://github.com/4teamwork/cypress-drag-drop

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

require('cypress-xpath')
require('cypress-plugin-tab')


describe("Manejo de los Alias.", () =>{

    it.only("Alias uno", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        cy.wait(1000)

        cy.get("#firstname").should("be.visible").as("nom") //el as es para guardar el campo en un alias (variable)

        cy.get("@nom").type("Pedro") //aqu se usa el alias con @alias 

        cy.get("#surname").should("be.visible").as("ap")
        cy.get("@ap").type("Perez Chavez")

        cy.get("#age").should("be.visible").as("edad")
        cy.get("#country").should("be.visible").as("pais")
        cy.get("#notes").should("be.visible").as("notas")

        cy.get("@edad").type("40")
        cy.get("@pais").select("Costa Rica").should("have.value","Costa Rica")
        cy.get("@notas").type("Demo del contenido")

        cy.xpath("//input[contains(@type,'submit')]").click({force:true})
       
    })


});