/// <reference types="Cypress" />

//https://github.com/4teamwork/cypress-drag-drop
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

require('cypress-xpath')
require('cypress-plugin-tab')


describe("Bucles For y each", () =>{

   
    it("For uno", () =>{
       
        for(let i=1; i<=100; i=i+10){
            cy.log("Numero: " + i)
        }

    })


    it("For dos", () =>{
       
        for(let i=1; i<=10; i++){
            let t=5
            cy.log(t + " X " + i + "=" + t*i)
        }

    })

    

    it("Each uno", () =>{ //Pagina no existe esta suspendida
        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(1000)

        cy.get(".product-name").each(($el,index,$list)=>{
            //index tiene indice la cantidad de poductos
            //el tiene una localización del producto que es un elemento tipo a con la clase poduct name
            //list trae todo lo que tiene el product name o sea toda la estructura del elemento a

           // cy.log($el.text())
            let vestido=$el.text() //Devuelve el nombre del product name 
            cy.log(vestido)

        })

    })


    it("Each dos", () =>{ //Dar click a un producto especifico 
        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        cy.wait(2000)

        cy.get(".product-name").each(($el,index,$list)=>{
            
           // cy.log($el.text())
            let vestido=$el.text()
            if(vestido.includes("Printed Summer Dress")){
                cy.wrap($el).click()  //Para hacer click en un each se usa wrap lo que hace es agarrar los elementos que recorre y 
                //poner escoger uno de todos para hacerle click 
            }

        })

    })



    it("Each tres", () =>{ //Se hace click en un producto, cambia la cantidad, lo agrega al carrito, se va a la caja y vuelve al inicio
        cy.visit("http://automationpractice.com/index.php") 
        cy.title().should('eq','My Store')
        let t=200
        cy.wait(t)
        const datos=[];

        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            
            for(let x=0; x<=datos.length; x++){
                cy.get("#center_column .product-name").eq(x).click({force:true}) //eq es para que seleccione un elemento (Producto)
                cy.wait(t)
                cy.get("#quantity_wanted").should("be.visible").clear().type("4") //cambia cantidad
                cy.wait(t)
                cy.get("#group_1").select("M").should("have.value","2") //selecciona una talla
                cy.wait(t)
                cy.get(".exclusive > span").should("be.visible").click({force:true}) //clic agregar al carrito
                cy.wait(t)
                cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true}) //boton de ir a la caja
                cy.wait(t)
                cy.get(".icon-home").should("be.visible").click({force:true}) //volver al inicio 
            }

        })
       

    })


});