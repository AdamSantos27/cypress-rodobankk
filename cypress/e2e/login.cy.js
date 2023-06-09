describe('login Rodobank', () => {
  it('fazer, login com sucesso na plataforma', () => {
    cy.visit('https://dev.rodobank.com.br')
    cy.get('.user').type('adam.santos.dev@gerencial.com.br')
    cy.get('.lock').type('235689')
    cy.get('.form-group > .btn').click()
    cy.wait(12000)
    cy.get('.account-avatar').should('be.visible')
  })
})