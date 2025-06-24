describe('Navigate from Homepage to Blog - Higo.id', () => {
    it('should visit homepage and go to Blog page', () => {
      cy.visit('https://higo.id');
      cy.wait(1000);
      cy.get('nav').should('be.visible');
  
      cy.contains('Blog')
        .should('have.attr', 'href', 'https://blog.higo.id/')
        .invoke('removeAttr', 'target')
        .click();
  
      cy.origin('https://blog.higo.id', () => {
        cy.on('uncaught:exception', (err) => {
         
          if (err.message.includes('Minified React error #425')) {
            return false;
          }
        });
  
        cy.url().should('eq', 'https://blog.higo.id/');
        cy.contains('Artikel Terbaru').should('be.visible');
        cy.scrollTo('bottom', { duration: 3000 });
      });
    });
  });
  