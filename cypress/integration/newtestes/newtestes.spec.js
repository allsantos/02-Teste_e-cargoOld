import pageInutilizacao from '../pages/pageInutilizacao'
import pageLogin from '../pages/pageLogin'
describe('NewTestes', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it('TesteLogin', () => {
        pageLogin.setUsuario('asp.signa') // cy.get('[placeholder="Usuário"]').type('asp.signa')
        pageLogin.setSenha('Piq@signa2020')
            cy.wait(2000)       
        pageLogin.clickButton() // -- Métodos Clicar em Gravar --
//-----------------------------------------------------------------------------------------------------------------------------        
        pageInutilizacao.clickDropDown() //Abri um Drop Down //cy.get(':nth-child(4) > .dropdown-menu > :nth-child(20) > .submenu').click({ force: true })

        // Ponto de Operação
        cy.wait(1000)
        cy.getIframe() //Iframe
        pageInutilizacao.selectCombo('ADARK COMÉRCIO E TRANSPORTE')
        pageInutilizacao.clickGravar() // Novo método de gravar
            cy.wait(1000)
            cy.getIframe() //Iframe
            cy.get('@iframe').find('.FMER').then(($el) => {
                const msgPtOpera = 'Preencha UF'
                const formatString = $el.text()
                expect(formatString).to.be.eq(msgPtOpera)
            })

        // UF
        cy.wait(1000)
        cy.getIframe() //Iframe
        pageInutilizacao.selectUfEstado('SP') //cy.get('@iframe').find("[name='txttab_uf_solicitacao_id']").select('SP')
        pageInutilizacao.clickGravar() //cy.get('@iframe').find("input[alt='Gravar']").click() Método de gravar antigo
            cy.wait(1000)
            cy.getIframe() //Iframe
            cy.get('@iframe').find('.FMER').then(($el) => {
                const msgUf = 'Preencha Série'
                const formatString = $el.text()
                expect(formatString).to.be.eq(msgUf)
            })

        cy.wait(1000)
        cy.getIframe() // Iframe
        pageInutilizacao.setSerie('6232')
        pageInutilizacao.clickGravar()
            cy.wait(1000)
            cy.getIframe()
            cy.get('@iframe').find('.FMER').then(($el) =>{
                const msgSerie = 'Preencha Número de'
                const formatString = $el.text()
                expect(formatString).to.be.eq(msgSerie)
            })

        // Numero de
        cy.wait(1000)
        cy.getIframe() // Iframe
        pageInutilizacao.setNumeroDe('298321')
        pageInutilizacao.clickGravar()
            cy.wait(1000)
            cy.getIframe()
            cy.get('@iframe').find('.FMER').then(($el)=>{
                const msgNumeroAt = 'Preencha Número até'
                const formatString = $el.text()
                expect(formatString).to.be.eq(msgNumeroAt)
            })

        cy.wait(1000)
        cy.getIframe() // Iframe
        pageInutilizacao.setNumAte('435456')
        pageInutilizacao.clickGravar()
            cy.wait(1000)
            cy.getIframe()
            cy.get('@iframe').find('.FMER').then(($el) =>{
                const msgAno = 'Preencha Ano'
                const formatString = $el.text()
                expect(formatString).to.be.eq(msgAno)
            })

        //Ano
        cy.wait(1000) 
        cy.getIframe() // Iframe
        pageInutilizacao.setAno('2020')
        pageInutilizacao.clickGravar()
            cy.wait(1000)
            cy.getIframe()
            cy.get('@iframe').find('.FMER').then(($el) => {
                const msgJustInu = 'Preencha Justificativa da Inutilização'
                const formatString = $el.text()
                expect(formatString).to.be.eq(msgJustInu)
            })
        
        cy.wait(1000)
        cy.getIframe() // Iframe
        pageInutilizacao.setJustInut('Olá estamos testando essa plataforma!')
        pageInutilizacao.clickGravar() // Novo método de gravar
       
    })
})