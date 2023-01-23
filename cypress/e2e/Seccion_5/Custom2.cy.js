/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto cypres por medio de Comandos Personalizados', () =>{ 
  let tiempo=100
  before(()=>{    
    cy.visit('https://demo.seleniumeasy.com/input-form-demo.html'),
    cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
    cy.wait(tiempo)
  })

  Cypress.on('uncaught:exception', (err, runnable) => { //Es una validación que si encuentre una excepción me returne un false
    return false
  })
  
  it.only('Prueba invalida por nombre', () =>{
    cy.Bloque_Reto_Form("K","Sanchez","kim@gmail.com","5068456610","dirección uno","Costa Rica","Alaska","30803","demo.com","Proyecto demo uno",tiempo)
    cy.Validar_campo2("(//small[@class='help-block'][contains(.,'Please enter more than 2 characters')])[1]","Please enter more than 2 characters","Nombre")
  })

  it('Prueba validar email', () =>{
    cy.Bloque_Reto_Form("Kim","Sanchez","kim.com","5068456610","dirección uno","Costa Rica","Alaska","30803","demo.com","Proyecto demo uno",tiempo)
    cy.Validar_campo2("//small[contains(@data-bv-validator,'emailAddress')]","Please supply a valid email address","Emails")
   
  })


  it('Prueba invalida por Apellido', () =>{
    cy.Bloque_Reto_Form("Kim","****","kim@gmail.com","5068456610","dirección uno","Costa Rica","Alaska","30803","demo.com","Proyecto demo uno",tiempo)
  })

  it('Prueba Ok', () =>{
    cy.Bloque_Reto_Form("Kim","Sanchez","kim@gmail.com","5068456610","dirección uno","Costa Rica","Alaska","30803","demo.com","Proyecto demo uno",tiempo)
  })
});