describe('HSBC Credit Card Scenarios', () => {

  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/');
  });

  it('HSBC Credit Card', () => {
    // Wait for the page to load completely
    cy.wait(15000);

    // Ensure the element is visible
    cy.xpath('/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/nav/ul/li[1]/div[1]/span[2]').should('be.visible').trigger('mouseover', { force: true });
    cy.xpath('/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/nav/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/a').click({force: true});
    cy.xpath('/html/body/main/div[1]/div/div/div/div/div/div/div/h1').contains('Credit cards');
    cy.xpath('//*[@id="chp_main_link_2"]/a/span[1]').contains('HSBC Cashback Credit Card');
    cy.xpath('//*[@id="chp_main_link_2"]/a/span[1]').click({force: true});
    cy.xpath('//*[@id="pp_intro_button_1"]/span').should('be.visible');
    cy.xpath('//*[@id="pp_tools_button_2"]/span[1]').should('be.visible');
    cy.get('link[rel="canonical"]').should('have.attr', 'href').and('include', 'credit-cards/products/visa-cashback/');
    cy.get('#pp_intro_image_3').should('be.visible').and('have.attr', 'src', '/content/dam/hsbc/in/images/credit-card/16-9/13169-hsbc-virat-visa-cashback-card-1600x900.jpg');
    cy.get('#pp_tools_richtext_2 > p > span:nth-child(2)').should('be.visible').and('contain.text', 'INR999');
    cy.get('#pp_tools_richtext_3 > p > span:nth-child(2)').should('be.visible').and('contain.text', 'INR999 (waived if you spend more than INR200,000 per year)');
    cy.xpath('//*[@class="LPMimage"]')
      .should('be.visible')
      .and('have.attr', 'src')
      .should('include', 'https://www.hsbc.co.in/content/dam/hsbc/in/images/webchat/chat-button-en-pwsimg-2841.png');
    cy.xpath('/html/body/div[1]/div/header/div[4]/div/div[2]/div/div/div/a').click({force: true});
    cy.xpath('/html/head/title').contains('HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.screenshot();
  });
});