  import 'cypress-plugin-xhr-toggle'
  
describe('cy.origin()',()=>{
  beforeEach(()=>cy.visit('/'))


  it.only('Teste de abertura de novo chat', function () {
    cy.get('.modal-footer > .btn').click()
   
      cy.get('#btnchat').invoke('removeAttr', 'target').click()

      cy.get('#ci').type('Suporte')
      cy.get('#chat-email').type('suporte@teste.com.br')
      cy.get('#chat-telefone').type('11111111111')
      cy.get('#chat-cnpj').type('15928087000139')
      cy.get('#chat-razao').type('Razão Social Teste')

      cy.get('#chat-segmento').type('OUTROS')

      cy.get('#chat-departamento').type('Suporte técnico')
      cy.get('#chat-especialidade').type('Sem acesso ao sistema / Vendas / Operação de caixa')
      cy.get('#chat-descricao').type('Teste para Iniciar Atendimento')

      cy.get('button[type="submit"]').click()

      cy.origin('https://contact.adtechtelecom.com.br/chatclient/chat.php', ()=> {
        cy.wait(2000)
        cy.get('button #end-chat-up').click()
      })

      //cy.get('button[type="submit"]').click().wait(2000).contains('button','Cancelar').click()
      //cy.wait(4000)
      //cy.contains('button[type="submit"]','Finalizar').click()
  })
})