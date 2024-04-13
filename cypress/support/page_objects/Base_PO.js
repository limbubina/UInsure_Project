//Common Methods

class Base_PO {
    navigateUrl(path) {
      cy.fixture("config.json").then((data) => {
        cy.visit(data.baseUrl+path);
      });
    }
  
    getEmailAddressField(){
      return cy.get();
    }
  }
  export default Base_PO;
  