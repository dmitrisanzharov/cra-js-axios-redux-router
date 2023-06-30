describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://web.local.rentalmatics.com/');
    cy.get('input[name="email"]').type('victor.sarov@rentalmatics.com');
    cy.get('input[name="password"]').type('qwert12345!');
    cy.get('button[type="submit"]').click()
  })
})