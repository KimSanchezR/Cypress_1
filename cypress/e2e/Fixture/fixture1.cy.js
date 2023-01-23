/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Carga por Fixture", () =>{

    //before(function(){ //Se puede usar con la variable global
    //    cy.fixture('datos2').then(function(data){
    //        //this.data=data no funciona
    //        globalThis.data=data //se toman todos los datos de fixture datos2 y se ponen en la vaiable
    //    })
    //})

    // before(function(){ //Se puede usar en el alias 
    //     cy.fixture("datos2").as("datos_json") //el alias
    // })


    it("Test uno Cargando desde Json", ()=>{
        
        // cy.visit('https://demoqa.com/text-box')
        // cy.title().should('eq','ToolsQA')
        // cy.wait(2000)

        //Alias
        /*cy.get("@datos_json").then((data)=>{ 
            cy.get('#userName').should('be.visible').type(data.nombre)
            cy.wait(500)
            cy.get('#userEmail').should('be.visible').type(data.email)
            cy.wait(500)
            cy.get('#currentAddress').should('be.visible').type(data.dir1)
            cy.wait(500)
            cy.get('#permanentAddress').should('be.visible').type(data.dir2)
            cy.wait(500)
            cy.get('#submit').should('be.visible').click({force: true})
        })*/

        /*cy.fixture("datos2").then( tesdata =>{
            tesdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','ToolsQA')
                cy.wait(500)

                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(500)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.wait(500)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)
                cy.wait(500)
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.wait(500)
                cy.get('#submit').should('be.visible').click({force: true})
    
                
            })
        })*/
        
        cy.fixture("Excel_Json").then( tesdata =>{ //Convierte el excel a json y copia y pega en el fixture que quiera
            tesdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','ToolsQA')
                cy.wait(500)

                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(500)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.wait(500)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)
                cy.wait(500)
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.wait(500)
                cy.get('#submit').should('be.visible').click({force: true})
    
                
            })
        })

    })

}) 