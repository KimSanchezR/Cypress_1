
/// <reference types="Cypress" />
//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe("Manejo de Invoke.", () =>{

    it("Invoke", () =>{
        let tiempo=600

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get(".page-body > :nth-child(5)").invoke("text").as("informacion") //Invoke text almacenar o tomar el texto del elemento luego se 
        // mete en un alias oara usarlo 

        cy.get("@informacion").should("contain","The information will be submitted to the server if it passes client side validation.")

        cy.get("[for='firstname']").invoke("text").as("tn")

        cy.get("@tn").should("contain","First name:").then(()=>{
            cy.get("#firstname").should("be.visible").as("nom")
            cy.get("@nom").type("Pedro")
        })
      

    });

    it("Invoke text", () =>{
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")//Invoke text almacenar o tomar el texto del elemento luego se 
        // mete en un alias oara usarlo 

        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.")

        cy.get("[for='firstname']").invoke("text").as("title_name")

        cy.wait(tiempo)

        cy.get("@title_name").should("contain","First name:").then(()=>{
            cy.get("#firstname").type("Rodrigo")
        })

    })

    it("Invoke estilos", () =>{
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("attr","style","color:Blue; font-size: 80px")
               

    })


    it("Invoke Ocultar y Mostrar", () =>{
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("hide")
        cy.get("#firstname").invoke("hide")

        cy.wait(tiempo)

        cy.get("[for='firstname']").invoke("show","3s") // se puede poner el show sin los segundos 
        cy.get("#firstname").invoke("show","4s")
               

    })


    it("Invoke Ocultar y Mostrar Reto", () =>{
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html") 
        cy.title().should('eq','Input Validation')
        cy.get("[for='surname']").invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").type("Kim").then(()=>{
            cy.wait(tiempo)
            cy.get("[for='surname']").invoke("show", "6s")
            cy.get("#surname").invoke("show", "8s")
            cy.wait(tiempo)
            cy.get("#surname").type("Sánchez Ramírez")
            cy.wait(tiempo)
            
        })

    })

    it("Invoke src", () =>{ //veificar si una imagen tiene el SRC
        let tiempo=1500
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')
        cy.wait(tiempo)

        cy.xpath("//img[contains(@class,'cbt')]").invoke("attr", "src").should("include","sponsored-by-CBT.png")

    })


    it("Invoke target_blank", () =>{//no abra una nueva pestaña si no que abra en la misma 
        let tiempo=1500
        cy.visit("https://dvwa.co.uk/") 
        cy.title().should('eq','DVWA - Damn Vulnerable Web Application')
        cy.wait(tiempo)

       cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]").invoke("removeAttr", "target").click({force:true})

    })

});