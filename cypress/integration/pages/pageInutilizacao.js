class pageInutilizacao{

    clickGravar(){
        cy.get('@iframe').find("input[alt='Gravar']").click()
    }
    clickDropDown(){
        cy.get('li:nth-of-type(4) > .dropdown-menu > li:nth-of-type(20) > .ng-binding.submenu').click({ force: true})
    }
    // --------------------------------------------------------------------------------------------------------------
    selectCombo(cb){
        cy.get('@iframe').find("[name='txtponto_operacao_id']").select(cb)
    }
    selectUfEstado(uf){
        cy.get('@iframe').find("[name='txttab_uf_solicitacao_id']").select(uf)
    }
    setSerie(serie){
        cy.get('@iframe').find("input[name='txtserie']").type(serie)
    }
    setNumeroDe(numeroDe){
        cy.get('@iframe').find("input[name='txtnum_inicial']").type(numeroDe)
    }
    setNumAte(numeroAt){
        cy.get('@iframe').find("input[name='txtnum_final']").type(numeroAt)
    }
    setAno(ano){
        cy.get('@iframe').find("input[name='txtAno']").type(ano)
    }
    setJustInut(justificativa){
        cy.get('@iframe').find('#txtJustificativa').type(justificativa)
    }
    
}
export default new pageInutilizacao