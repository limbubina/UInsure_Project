import Base_PO from "./Base_PO";

class RecentActivity_PO extends Base_PO {
  elements = {
    headerField: () => cy.get(".MuiTypography-h1"),
    referenceTextField: () => cy.get("#policy-number"),
    clientNameTextField: () => cy.get("#policy-name"),
    PostcodeTextField: () => cy.get("#policy-postcode"),
    ResetButton: () => cy.get('[data-testid="reset-filter-button"]'),
    searchButton: () => cy.get('[data-testid="filter-button"]'),
    quoteTable: () => cy.get("#retrieve-quote-table-body"),
    quoteTableRow: () => cy.get('[data-testid="retrieved-quote"]'),
    referenceColumnHeader:()=> cy.get('[data-testid="reference-header"]'),
    ClientNameColumnHeader:()=> cy.get('[data-testid="client-name-header"]'),
    PostCodeColumnHeader:()=> cy.get('[data-testid="postcode-header"]'),
  };

  navigateToLoginPage() {
    super.navigateUrl("");
  }

  getHeaderText(expectedText) {
    this.elements.headerField().should("contain", expectedText);
  }

  typeReferenceNumber(expectedReference) {
    this.elements.referenceTextField().type(expectedReference);
  }

  typeClientName(expectedClientName) {
    this.elements.clientNameTextField().type(expectedClientName);
  }

  typePostCode(expectedPostCode) {
    this.elements.PostcodeTextField().type(expectedPostCode);
  }

  checkSearchResult(searchText, column){
    const quoteTable = this.elements.quoteTable;
    cy.get('${quoteTable} td:nth-child(${column})').should('contain',searchText);
  }
}
export default RecentActivity_PO;
