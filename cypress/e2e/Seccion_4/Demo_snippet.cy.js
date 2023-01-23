/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo del primer Snnippets', () =>{ 
    it('Demo uno', () =>{
        let tiempo=500
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('Kim')
        cy.wait(tiempo)
    })
});