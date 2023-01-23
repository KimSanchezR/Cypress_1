/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto de la función Hooks', () =>{ 
    let tiempo=3000
    before(()=>{  
        //#############----Principio de todo------################## 
        //Para no estar repitiendo código en todos los test   

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.wait(tiempo)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('admin')
        cy.wait(tiempo)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('admin123')
        cy.wait(tiempo)
        cy.get('.oxd-button').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

    after(() => {
        cy.log("################# Ultimo Ciclo --- Final de todo ###################")
        cy.wait(2000)
        //cy.xpath("//i[@class='material-icons'][contains(.,'keyboard_arrow_down')]").should('be.visible').click({force: true})
        cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click({force: true})
        cy.wait(tiempo)
        //cy.xpath("//a[@href='/auth/logout'][contains(.,'Logout')]").should('be.visible').click({force: true})
        cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click({force: true})
        cy.wait(tiempo)
        
      })

    it('test uno', () =>{      
        //cy.xpath('(//span[contains(@class,"left-menu-title")])[3]').should('be.visible').click({force: true})
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

    it('test dos', () =>{      
        //cy.xpath("(//span[@class='left-menu-title'][contains(.,'Leave')])[1]").should('be.visible').click({force: true})
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

    it('test tres', () =>{      
        //cy.xpath("(//span[@class='left-menu-title'][contains(.,'Performance')])[1]").should('be.visible').click({force: true})
        cy.get(':nth-child(7) > .oxd-main-menu-item').should('be.visible').click({force: true})
        cy.wait(tiempo)
    })

});
