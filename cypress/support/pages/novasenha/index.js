const el = require('./elements').ELEMENTS


class login{
senha(){

    cy.visit(el.visit)
    cy.get(el.email).type(el.nome)
    cy.get(el.senha).type(el.nome1)
    cy.get(el.botao).click()
    cy.get(el.botao1).click()
    cy.get(el.botao2).type(el.botao3)
    cy.get(el.botao4).click()
 
 
}


}

export default new login()