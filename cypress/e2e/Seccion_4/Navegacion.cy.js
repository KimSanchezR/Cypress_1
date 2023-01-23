/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Navegación entre las páginas', () =>{ 
    it('Back, forward', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        //click en elements
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //click en opcion Text Box
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Regresar a elements y al inicio
        cy.go("back")
        cy.go("back")

        //Vuelve a elements y text box
        cy.go("forward")
        cy.go("forward")
    })


    it.only('Reload', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)        

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('Kim')
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('Kim@gmail.com')
        cy.wait(tiempo)

        //Recarga la pagina y borra todo
        cy.reload()

        cy.wait(tiempo)

        cy.go("back")

        
    })
});