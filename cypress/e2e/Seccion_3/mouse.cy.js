/// <reference types="Cypress" />

//https://github.com/4teamwork/cypress-drag-drop
require('@4tw/cypress-drag-drop')

require('cypress-xpath')

describe("Cypress eventos Mouse", () =>{

    it("Drag and Drop", () =>{
        let tiempo=1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title("'eq","The Internet")

        cy.wait(1500)

        cy.get("#column-a").drag("#column-b",{force:true})

    })


    it("Drag and Drop 2", () =>{
        let tiempo=1000
        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html")
        cy.title("'eq","Selenium Easy Demo - Drag and Drop Demo")
        cy.wait(1500)

        cy.get("#todrag > :nth-child(2)").drag("#mydropzone")
       /* cy.wait(1500)
        cy.get("#todrag > :nth-child(3)").drag("#mydropzone")
        cy.wait(1500)
        cy.get("#todrag > :nth-child(4)").drag("#mydropzone")
        cy.wait(1500)
        cy.get("#todrag > :nth-child(5)").drag("#mydropzone")*/
    })


    it("Mouse Over", () =>{
        let tiempo=1000
        cy.visit("http://way2automation.com/")
        cy.title("'eq","Get Online Selenium Certification Course | Way2Automation")
        cy.wait(tiempo)

        //cy.contains("All Courses").contains("Selenium").trigger('mouseover', {force:true})
        cy.contains("Selenium").trigger('mouseover', {force:true})
        cy.wait(tiempo)

        cy.contains("Selenium Python Video Tutorials").invoke("removeAttr","target").click() 
        //esto es para eliminar el atributo target y es que el link no se abra en otra pagina fuera del test 

    })

    it.only("Slider", () =>{
        let tiempo=1800
        cy.visit("https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html")
        cy.title("'eq","Selenium Easy - Drag and Drop Range Sliders ")
        cy.wait(tiempo)

        cy.get("#slider1 > .range > input").invoke("attr", "value", "90")
        cy.wait(tiempo)

        cy.get("#slider3 > .range > input").invoke("attr", "value", "90")
        cy.wait(tiempo)
        cy.get("#slider5 > .range > input").invoke("attr", "value", "90")
    })

});