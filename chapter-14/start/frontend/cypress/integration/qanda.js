describe('Ask question', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('When signed in and ask a valid question, the question should successfully save', () => {
    cy.contains('Q & A');
    cy.contains('Unanswered Questions');
    cy.contains('Sign In').click();
    cy.url().should('include', 'auth0');
    cy.findByLabelText('Email address')
      .type('aurzin@live.ru')
      .should('have.value', 'aurzin@live.ru');

    cy.findByLabelText('Password')
      .type('fuckYou!')
      .should('have.value', 'fuckYou!');

    cy.get('form:first').submit();

    cy.contains('Unanswered Questions');

    cy.contains('Ask a question').click();
    cy.contains('Ask a question');

    var title = 'title test';
    var content = 'Lots and lots and lots and lots and lots of content test';
    cy.findByLabelText('Title').type(title).should('have.value', title);
    cy.findByLabelText('Content').type(content).should('have.value', content);

    cy.contains('Submit Your Question').click();
    cy.contains('Your question was successfully submitted');

    cy.contains('Sign Out').click();
    cy.contains('You successfully signed out!');
  });
});
