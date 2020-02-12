class pageConsultaCliente {
    clickDropDown(){
        cy.get('#navbar > li:nth-child(3) > ul > li:nth-child(2) > a').click({force: true})
    }
    clickDadosBasicos() {
        cy.get('@iframe').find('td:nth-of-type(2) > a > .FLIN').click()
    }
    setCodInterno(cdint) {
        cy.get("@iframe").find("input[name='txt_Cod_Interno_id']").type(cdint)
    }
    setNomeFantasia(nomeFan) {
        cy.get('@iframe').find("input[name='txt_Nome_Fantasia']").type(nomeFan)
     }
     setNomeC(nomeC) {
         cy.get('@iframe').find("input[name='txt_Nome']").type(nomeC)
     }
    clickTpPessoa() {
        cy.get('@iframe').find('td:nth-of-type(2) > input:nth-of-type(2)').click({force: true})
    }
    clickTpPessoa01() {
        cy.get('@iframe').find('tr:nth-of-type(4) > td:nth-of-type(2) > input:nth-of-type(1)').click({force: true})
    }
    setCpf(cpf) {
        cy.get('@iframe').find("input[name='txt_CGC_CPF']").type(cpf)
    }
    clickPesquisar() {
        cy.get('@iframe').find("[alt='Pesquisar']").click()
    }
    clickCadastrar() {
        cy.get('@iframe').find("[alt='Cadastrar']").click()
    }
}
export default new pageConsultaCliente
