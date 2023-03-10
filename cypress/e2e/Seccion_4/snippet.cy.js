/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

//Snippets son maneras mas sencillas de escribir codigo con plantillas creadas por uno mismo 
describe('Demo de la primer plantilla', () =>{ 

    it('Demo uno', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/text-box') 
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('rodrigo')
        cy.wait(tiempo)
        
        cy.get('[type="text"]').should('be.visible').type('Demo')
        cy.wait(tiempo)
    })
});