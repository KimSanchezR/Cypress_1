/// <reference types="Cypress" />

//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

require('cypress-xpath')
require('cypress-plugin-tab')


describe("Campos de tipo fecha", () =>{

    it("Fecha uno", () =>{
        let tiempo=1000
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("'eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

         //cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("19/09/2021").then(()=>{
            //cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").tab() //no sirve 
           // cy.get("[placeholder='Start date']").should("be.visible").focus() //no sirve 
           // cy.get("#sandbox-container1 > .input-group > .form-control").click(10,20) //no sirve 
         //})

        //cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("19/09/2021").tab() //no sirve 

        cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").click()
        cy.wait(tiempo)
        cy.get(".today").first().click({force:true})

    })


    it("Fecha dos", () =>{
        let tiempo=1000
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("'eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        cy.get("[placeholder='Start date']").should("be.visible").type("19/09/2021 {esc}") //funciona
        cy.wait(tiempo)

        cy.get('[placeholder="End date"]').should("be.visible").type("19/10/2021 {esc}") //no funciona

    })


    it.only("Fecha tres", () =>{ //Es el mismo ejercicio del 2 pero este si funciona correctamente
        let tiempo=1000  
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")
        cy.title("'eq","Selenium Easy - Best Demo website for Bootstrap Date picker")
        cy.wait(tiempo)

        cy.get("[placeholder='Start date']").should("be.visible").type("19/09/2021 {esc}").tab().type("19/10/2021 {esc}")
        

    })


});