describe('Teste Site Practice', () => {

  it('Preencher formulario', () => {

    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get('#name').type('Felipe')
    cy.get('#email').type('felipe00@gmail.com')
    cy.get('#phone').type('051999999999')
    cy.get('#textarea').type('rua de teste, 199')

    cy.get('#male').click()
    cy.get('#monday').click()
    cy.get('#tuesday').click()
    cy.get('#country').select('Brazil')
    cy.get('#colors').select('Blue')
    cy.get('[value="cat"]').click()
    cy.get('#datepicker').type('10/05/2026')
    cy.get('input[name="SelectedDate"]').click({ force: true })
    cy.get('#start-date')
  .type('2026-10-01')
  cy.get('#end-date')
  .type('2026-10-15')
  cy.contains('Submit')
.click()
cy.contains('You selected a range of 14 days.')
// Valida que o intervalo foi calculado corretamente
cy.contains('You selected a range of 14 days.')
  .should('be.visible')
  
  })

})

