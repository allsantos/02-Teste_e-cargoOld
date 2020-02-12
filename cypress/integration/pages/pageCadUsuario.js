class pageCadUsuario {
    setCodExt(codExt) {
        cy.get('@iframe').find("input[name='txt_Id_Sistema_Externo']").type(codExt)
    }
    setNameFatCad(nameFatCad) {
        cy.get('@iframe').find("input[name='txt_Nome_Fantasia']").type(nameFatCad)
    }
    setRazaoSoc(razaoSoc) {
    cy.get('@iframe').find("input[name='txt_nome']").type(razaoSoc)
    }
    clickTpF() {
        cy.get('@iframe').find('tr:nth-of-type(4) > td:nth-of-type(2) > input:nth-of-type(2)').click({force: true})
    }
    clickTpJ() {
        cy.get('@iframe').find("tr:nth-child(4) [colspan='4'] > [type='radio']:nth-child(1)").click({force: true})
    }
    setCpfPess(cpfpess) {
        cy.get('@iframe').find("input[name='txt_cgc_cpf']").type(cpfpess)
    }
    setRg(rg) {
        cy.get('@iframe').find("input#txt_pf_rg").type(rg)
    }
    setEscMunicipal(escmunicipal) {
        cy.get('@iframe').find("input[name='txt_pj_Inscr_Municipal']").type(escmunicipal)
    }
    clickNaoContribuente() {
        cy.get('@iframe').find("input[name='txtflag_nao_contribuinte']").click({force:true})
    }
    clickIsentoDeCnpj() {
        cy.get('@iframe').find("input[name='txtflag_isento_cgc']").click({force:true})
    }
    clickNaoIncPag() {
        cy.get('@iframe').find("input[name='txtFlag_Nao_Incide_Pagto']").click({force:true})
    }
    
    // ----------------------------------Cadastro endereço----------------------------------
    clickEnderecoManual () {
        cy.get("@iframe").find("input#chkRemoveSelger").click({force:true})
    }

    setCepLivre (ceplivre) { // Digitação Livre
        cy.get('@iframe').find("#txt_Cep_Cad").type(ceplivre)
    }
    setCepBlock (cepblock) { // Digitação Bloqueada
        cy.get('@iframe').find("input#txt_Cep").type(cepblock)
    }
    setCity (city) {
        cy.get('@iframe').find("input[name='txtmunicipio']").type(city)
    }
    /*setEstado (estad) {
        cy.get('@iframe').find("input[name='txtuf']").type(estad)
    }*/
    setLogrado (logradouro) {
        cy.get('@iframe').find("#txt_endereco").type(logradouro)
    }
    setComplemento (complemento) {
        cy.get('@iframe').find("input#txt_Complemento").type(complemento)
    }
    setDdd (ddd) {
        cy.get('@iframe').find("input[name='txtDDD_FONE']").type(ddd)
    }
    setTelefone (tell) {
        cy.get('@iframe').find("input[name='txt_fone']").type(tell)
    }
    setObservacao (obs) {
        cy.get('@iframe').find("textarea[name='txt_Obsev']").type(obs)
    }
    setEmail (email) {
        cy.get('@iframe').find("input[name='txtemail_endereco']").type(email)
    }
    setHomePage (homepage) {
        cy.get('@iframe').find("input[name='txthome_page_endereco']").type(homepage)
    }
    clickAgenEnt () {
        cy.get('@iframe').find("input[name='txtFlag_agendamento']").click()
    }
    setLatitude (latitude) {
        cy.get('@iframe').find("input[name='txt_LatitudeAVL_Exib']").type(latitude)
    }
    setLongetude (longetude) {
        cy.get('@iframe').find("input[name='txt_LatitudeGEO_Exib']").type(longetude)
    }
    setDecLat (declat) {
        cy.get('@iframe').find("input[name='txt_LatitudeAVL_Dec']").type(declat)
    }
    setDecLonge (declonge) {
        cy.get('@iframe').find("input[name='txt_LatitudeGEO_Dec']").type(declonge)
    }
    setKmRaio (kmraio) {
        cy.get('@iframe').find("input[name='txt_km_macro']").type(kmraio)
    }
    setLongAvl (latlong) {
        cy.get('@iframe').find("input[name='txt_LongitudeAVL_Exib']").type(latlong)
    }
    setLongGeo (longgeo) {
        cy.get('@iframe').find("input[name='txt_LongitudeGEO_Exib']").type(longgeo)
    }
    setDecLongAvl (declongavl) {
        cy.get('@iframe').find("input[name='txt_LongitudeAVL_Dec']").type(declongavl)
    }
    setDecLongGeo (declonggeo) {
        cy.get('@iframe').find("input[name='txt_LongitudeGEO_Dec']").type(declonggeo)
    }
    setContato (contato) {
        cy.get('@iframe').find("input[name='txt_Contato']").type(contato)
    }
    setNumEnd (numend) {
        cy.get('@iframe').find("input#txt_End_Numero").type(numend)
    }
    setBairro (bairro) {
        cy.get('@iframe').find("input[name='txt_bairro']").type(bairro)
    }
    selectColeta (seleccoleta) {
        cy.get('@iframe').find("center > form:nth-child(3) > table:nth-child(69) > tbody > tr:nth-child(1) > td:nth-child(3) > select").select(seleccoleta)
    }
    selectEntrega (selecentrega) {
        cy.get('@iframe').find("center > form:nth-child(3) > table:nth-child(69) > tbody > tr:nth-child(1) > td:nth-child(3) > select").select(selecentrega)
    }
    selectCobranca (seleccobranca) {
        cy.get('@iframe').find("center > form:nth-child(3) > table:nth-child(69) > tbody > tr:nth-child(1) > td:nth-child(3) > select").select(seleccobranca)
    }
    selectComercial (seleccomercial) {
        cy.get('@iframe').find("center > form:nth-child(3) > table:nth-child(69) > tbody > tr:nth-child(1) > td:nth-child(3) > select").select(seleccomercial)
    }   
    selectResidencial (selectresident) {
        cy.get('@iframe').find("center > form:nth-child(3) > table:nth-child(69) > tbody > tr:nth-child(1) > td:nth-child(3) > select").select(selectresident)
    }
    clickGravaSave () {
        cy.get('@iframe').find("input[alt='Gravar']").click()
    }
    //------------------------Limpar Campos
    clearCampo () {
        cy.get('@iframe').find("input[name='txt_Nome_Fantasia']").clear() 
    }
    clearCampo2 () {
        cy.get('@iframe').find("input[name='txt_Id_Sistema_Externo']").clear() 
    }
}


export default new pageCadUsuario