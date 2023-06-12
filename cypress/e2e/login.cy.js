import Glob from '../support/Elements/GlobalsElements';

describe('login Rodobank', () => {
  it('fazer, login com sucesso na plataforma', () => {
      cy.visit(Glob.Url);
      cy.get(Glob.campoEmail).type('adam.santos.dev@gerencial.com.br')
      cy.get(Glob.campoSenha).type('235689')
      cy.get(Glob.botaoLogin).click()
      cy.wait(12000)
      cy.get('.account-avatar').should('be.visible')
    })
  })