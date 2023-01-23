describe ("Cypress Training Sección 1", () => {
    it("Mi primer test, Hola Mundo", () => {
        cy.log("Hola mundo");
        cy.wait(2000)
    })

    it('Segundo test - campo name', () => {
        cy.once('uncaught:exception', () => false);

        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Kimberly")
        cy.wait(2000)
    });

}) // Cierre de describe 