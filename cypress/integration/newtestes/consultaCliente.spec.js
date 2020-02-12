/// <reference types='cypress' />
import pageLogin from '../pages/pageLogin'
import pageConsultaCliente from '../pages/pageConsultaCliente'
import pageCadUsuario from '../pages/pageCadUsuario'

describe('Pagina Consulta e Cadastra Cliente', () => {
    beforeEach(() => { 
        cy.visit('/')
        pageLogin.setUsuario('asp.signa')
        pageLogin.setSenha('Piq@signa2020')
        pageLogin.clickButton()

        cy.location('pathname').should('eq', '/NovoIndex.asp') // Confirma para qual pagina está me enviando, após fazer login
    })   

    it.skip('Consulta Usuario', () => {

        cy.getIframe()
        pageConsultaCliente.clickDropDown()

        cy.wait(1000)
        cy.getIframe()
        pageConsultaCliente.clickDadosBasicos()

        // ---------------Verifica Mensagem, Pagina CunsultaCliente---------------
        cy.wait(1000)
        cy.getIframe()
        pageConsultaCliente.clickPesquisar()

        cy.wait(1000)
        cy.getIframe()

        cy.get('@iframe').find('.FMER').then(($el) => {
             expect($el.text()).to.be.eq('Preencha uma das informações abaixo para pesquisa.')
         })
         /*--------ANTIGO MÉTODO--------
         cy.get('@iframe').find('.FMER').then(($el) => {       
             const msgUf = 'Preencha uma das informações abaixo para pesquisa.'
             const formatString = $el.text()
             expect(formatString).to.be.eq(msgUf)
         })  */

        // -----------------------------------------------------------------------
        // ---------------Pagina Cunsulta Cadastro--------------------------------
        cy.wait(5000),cy.getIframe(),pageConsultaCliente.setCodInterno('Teste')
        cy.wait(1000),pageConsultaCliente.setNomeFantasia('Signa Consultoria e Técnologia')
        cy.wait(1000),pageConsultaCliente.setNomeC('Allan Feitosa dos Santos')
        cy.wait(1000),pageConsultaCliente.clickTpPessoa()
        cy.wait(1000),pageConsultaCliente.clickTpPessoa01()
        cy.wait(1000),pageConsultaCliente.setCpf('335.543.123-6')
        cy.wait(1000),pageConsultaCliente.clickPesquisar()
        cy.wait(1000),pageConsultaCliente.clickCadastrar()
    })
    it.skip('Cadastra Usuario', () => {
        cy.getIframe()
        pageConsultaCliente.clickDropDown()
        cy.wait(3000)
        cy.getIframe()
        pageConsultaCliente.clickDadosBasicos()
        cy.wait(3000)
        cy.getIframe()
        pageConsultaCliente.clickCadastrar()

    
//-----------------------------------------------------------------
        // > ---------------------IFRAME--------------------- < //
        cy.wait(3000)
        cy.getIframe()
        pageCadUsuario.setCodExt('cod98')
        pageCadUsuario.clickGravaSave()
            cy.wait(2000)
            cy.getIframe()
            cy.get('@iframe').find('.FMER').then(($el) => {
                expect($el.text()).to.be.eq('O campo Cnpj / Cpf é obrigatório.')
            }) 

        cy.wait(3000)
        pageCadUsuario.setNameFatCad('Signa Scot teste')

        
        cy.wait(3000)
        pageCadUsuario.setRazaoSoc('Signa teste vezes teste')
        cy.wait(3000)
        pageCadUsuario.clickTpF()
        pageCadUsuario.clickTpJ()
        pageCadUsuario.clickTpF()

        cy.wait(1000),pageCadUsuario.setCpfPess('40221569022')
        cy.wait(1000),pageCadUsuario.clickGravaSave()
            cy.wait(2000)
            cy.getIframe()
            cy.get('@iframe').find('.FMER').then(($el) => {
                expect($el.text()).to.be.eq('Informe pelo menos um endereço.')
            })
        pageCadUsuario.clickTpF()

        cy.wait(1000)
        pageCadUsuario.setRg('5932530147')
        cy.wait(1000)
        pageCadUsuario.setEscMunicipal('Inscrição')
        cy.wait(1000)
        pageCadUsuario.clickNaoContribuente()
        pageCadUsuario.clickNaoContribuente()
        pageCadUsuario.clickNaoContribuente()
        cy.wait(1000),pageCadUsuario.clickIsentoDeCnpj()
        pageCadUsuario.clickIsentoDeCnpj()
        cy.wait(1000),pageCadUsuario.clickNaoIncPag()
        cy.wait(1000),pageCadUsuario.clickNaoIncPag() 

        //------------------------Cadastra Endereço------------------------
        
        cy.wait(3000)
        pageCadUsuario.clickEnderecoManual()
        cy.wait(3000)
        pageCadUsuario.setCepLivre('04018010')
        pageCadUsuario.setCity('São Paulo')
        //pageCadUsuario.setEstado('UF')      
        pageCadUsuario.setLogrado('B')
        pageCadUsuario.setComplemento('Esquina da Brigadeiro')
        pageCadUsuario.setDdd('11')
        pageCadUsuario.setTelefone('23457890')
        pageCadUsuario.setObservacao('Testando Observação')
        pageCadUsuario.setEmail('teste.conclusao@gmail.com')
        pageCadUsuario.setHomePage('sdfghjj654edfghj')

        // -------COMBO-------
        pageCadUsuario.selectColeta('Coleta')
        pageCadUsuario.selectEntrega('Entrega')
        pageCadUsuario.selectCobranca('Cobrança')
        pageCadUsuario.selectComercial('Comercial')
        pageCadUsuario.selectResidencial('Residencial')

        pageCadUsuario.setContato('11923455432')
        pageCadUsuario.setNumEnd('32DEK')
        pageCadUsuario.clickAgenEnt()
        pageCadUsuario.setBairro('Av Paulista')
        
        cy.wait(3000)
        pageCadUsuario.clickGravaSave()
        cy.wait(3000)
        cy.getIframe()
        cy.get('@iframe').find('td > .FMER').then(($el) => {
             expect($el.text()).to.be.eq('Código Externo já cadastrado.')
        })

        /*
        cy.get('@iframe').find('.FMER').then(($el) => {
            const msgCodInv = 'Código Externo já cadastrado.'
            const formatString = $el.text()
            expect(formatString).to.be.eq(msgCodInv)
        })*/
        
       cy.wait(1000)
       pageCadUsuario.clearCampo2()
       
       pageCadUsuario.setCodExt('cd236')
       
       pageCadUsuario.clickGravaSave()

       cy.wait(3000)
       cy.getIframe()
           cy.get('@iframe').find('.FMER').then(($el) => {
               expect($el.text()).to.be.eq('Já existe uma pessoa cadastrada com o mesmo Nome Fantasia - Código Interno: 10112 .')
           })
        
       cy.wait(3000)
       pageCadUsuario.clearCampo()
       //pageCadUsuario.setNameFatCad('Signa Refaz Cypress').clear()
       //cy.get('@iframe').find("input[name='txt_Nome_Fantasia']").clear() 
       cy.wait(3000)
       pageCadUsuario.setNameFatCad('Signa Dasdwqdcvfdw asasa')

        cy.wait(1000)
        cy.getIframe()
        pageCadUsuario.setLatitude('56789')
            
        /*
        pageCadUsuario.setLongetude('')
        pageCadUsuario.setDecLat('')
        pageCadUsuario.setDecLonge('')
        pageCadUsuario.setKmRaio('5')
        pageCadUsuario.setLongAvl('1')
        pageCadUsuario.setLongGeo('6')
        pageCadUsuario.setDecLongAvl('3')
        pageCadUsuario.setDecLongGeo('9') */
        


        /*
        cy.wait(1000),pageCadUsuario.clickEnderecoManual()
        cy.wait(1000),pageCadUsuario.setCepBlock('12210131')
        cy.wait(1000),pageCadUsuario.clickGravaSave()
        */

       pageCadUsuario.clickGravaSave()
        })
    it('TesteAlert', () => {
        cy.getIframe()
        pageConsultaCliente.clickDropDown()
        cy.wait(3000)
        cy.getIframe()
        pageConsultaCliente.clickDadosBasicos()
        cy.wait(3000)
        cy.getIframe()
        pageConsultaCliente.clickCadastrar()

        // > ---------------------IFRAME--------------------- < //
        cy.wait(3000)
        cy.getIframe()
        pageCadUsuario.setCodExt('cod98')
        pageCadUsuario.setNameFatCad('Signa Scot teste')
        pageCadUsuario.setRazaoSoc('Signa teste vezes teste')
        pageCadUsuario.clickTpF()
        pageCadUsuario.clickTpJ()
        pageCadUsuario.clickTpF()
        pageCadUsuario.setCpfPess('40221569022')
        pageCadUsuario.clickTpF()
        pageCadUsuario.setRg('5932530147')
        pageCadUsuario.setEscMunicipal('Inscrição')
        pageCadUsuario.clickNaoContribuente()
        pageCadUsuario.clickIsentoDeCnpj()
        pageCadUsuario.clickNaoIncPag()

        //------------------------Cadastra Endereço------------------------
        pageCadUsuario.clickEnderecoManual()
        pageCadUsuario.setCepLivre('04018010')
        pageCadUsuario.setCity('São Paulo')  
        pageCadUsuario.setLogrado('B')
        pageCadUsuario.setComplemento('Esquina da Brigadeiro')
        pageCadUsuario.setDdd('11')
        pageCadUsuario.setTelefone('23457890')
        pageCadUsuario.setObservacao('Testando Observação')
        pageCadUsuario.setEmail('teste.conclusao@gmail.com')
        pageCadUsuario.setHomePage('sdfghjj654edfghj')

        // -------COMBO-------
        pageCadUsuario.selectResidencial('Residencial')
        pageCadUsuario.setContato('11923455432')
        pageCadUsuario.setNumEnd('32DEK')
        pageCadUsuario.clickAgenEnt()
        pageCadUsuario.setBairro('Av Paulista')
        pageCadUsuario.setCodExt('cd236')
        pageCadUsuario.clearCampo()
        pageCadUsuario.setNameFatCad('Signa Dasdwqdcvfdw asasa')
        pageCadUsuario.setLatitude('56789')

        cy.getIframe()
        //pageCadUsuario.clickGravaSave()

        //  cy.on('window:alert', (str) => {
        //      expect(str).to.eq(`A Latitude(AVL) esta incorreta deseja corrigir?`)
        //  })

        cy.wait(3000)
         cy.get('iframe').then(($iframe) => {
           const $body = $iframe.contents().find('body')
           const $win = $iframe[0].contentWindow
        
           cy.stub('window:alert').as('windowAlert')
        
           cy.wrap($body).find("input[alt='Gravar']").click().should(function () {
               expect(this.windowAlert).to.be.calledWith('A Latitude(AVL) esta incorreta deseja corrigir?')
             })
         })

         /*
        cy.get('iframe').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        const $win = $iframe[0].contentWindow

        cy.stub($win, 'alert').as('windowAlert')

        cy.wrap($body).find('#alert').click().should(function () {
            expect(this.windowAlert).to.be.calledWith('Hello world!')
        })
        */


        })
    }) 
