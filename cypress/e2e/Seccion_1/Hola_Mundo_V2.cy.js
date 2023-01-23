describe ("Cypress Training Sección 1", () => {
    it('Cypress Form', () => {
        cy.log("Mi primer Test Completo");
        cy.once('uncaught:exception', () => false);

        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get("#wsf-1-field-21").type("Kimberly")
        cy.wait(2000)
        cy.get("#wsf-1-field-22").type("Sánchez")
        cy.wait(2000)
        cy.get("#wsf-1-field-23").type("kimi_zan@hotmail.com")
        cy.wait(2000)
        cy.get("#wsf-1-field-24").type("88997744")
        cy.wait(2000)
        cy.get("#wsf-1-field-28").type("Demo de la dirección")
        cy.wait(2000)
        cy.get("#wsf-1-field-27").click()
        cy.wait(4000)
    });

}) // Cierre de describe 
