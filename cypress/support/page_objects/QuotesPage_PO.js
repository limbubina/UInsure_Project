import Base_PO from "./Base_PO";

class QuotesPage_PO extends Base_PO {
  elements = {
    headerField: () => cy.get('.MuiTypography-h1'),
    referenceNumber: ()=> cy.get('#policy-number'),
    searchButton:()=>cy.get('[data-testid="filter-button"]')
  }

  navigateToLoginPage() {
    super.navigateUrl("");
  }

  getHeaderText(expectedText){
   this.elements.headerField().should("contain", expectedText);
  }

  typeReferenceNumber(expectedReference){
    this.elements.referenceNumber().type(expectedReference);
  }

}
export default QuotesPage_PO;
