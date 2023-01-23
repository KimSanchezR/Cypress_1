/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Comandos Personalizados', () =>{ 
    let tiempo=1000
    before(()=>{    
        cy.visit('https://demoqa.com/text-box'),
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })

    it('Demo uno', () =>{
       cy.Texto_visible("#userName","Kim",2000)     
       cy.Texto_visible("#userEmail","Kim@email.com",2000) 
       cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]","Dirección uno",1000)
       cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]","Dirección dos",1000)
       cy.Click_force_xpath("//button[contains(@id,'submit')]",500)
    })

    it.only('Demo dos por bloque', ()=>{
        cy.Bloque_ToolsQA_Dos("Kim","Kim@gmail.com","Dirección uno","Dirección dos",600)
    })
});