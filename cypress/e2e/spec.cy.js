describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://web.local.rentalmatics.com/');
    cy.get('input[name="email"]').type('victor.sarov@rentalmatics.com');
    cy.get('input[name="password"]').type('qwert12345!');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:3000/');
    cy.origin('http://localhost:3000/', () => {
      cy.get('#vid').invoke('css', 'z-index').then(el => 
          expect(el).to.eq('2')
      )
      cy.get('#vid-td').invoke('css', 'z-index').then(el =>
        expect(el).to.eq('1')
      );
    })
  })
})