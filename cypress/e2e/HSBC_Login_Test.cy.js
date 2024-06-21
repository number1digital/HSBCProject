describe('HSBC Login Scenarios', () => {

  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/');
  })

  it('HSBC Login Test', () => {
    cy.wait(15000);
    cy.xpath('/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/div/h1/img[@src="/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"]').should('be.visible');
    cy.xpath('/html/head/title').contains('HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.contains('Log On').click({force: true});
    cy.wait(5000);
    cy.xpath('//*[@id="pwsModalBody_text_1"]/h2/span').contains('Manage your money more easily with the HSBC India app');
    cy.contains('Continue to log on with browser').click({force: true});
    cy.xpath('//*[@id="username_submit_btn"]').should('be.disabled');
    cy.get('input#username').type('project@phase1.com');
    cy.wait(5000);
    cy.xpath('//*[@id="username_submit_btn"]').should('be.enabled');
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('be.visible');
    cy.get('a#username_help_link').click({force: true});
    cy.xpath('//*[@id="help_content_1"]/h3').contains('Username');
    cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').should('be.visible');
    cy.wait(5000);
    cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').click({force: true});
    cy.screenshot();
  })
})
