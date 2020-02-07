class pageLogin{
    setUsuario(usuario){
        cy.get('[placeholder="Usuário"]').type(usuario)
    }
    setSenha(senha){
        cy.get('[placeholder="Senha"]').type(senha)    
    }

    //Botão Gravar
    clickButton(){
        cy.get('button').click()
    }
}
export default new pageLogin