import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import QuotesPage_PO from "../page_objects/QuotesPage_PO";

const QuotesPagePO = new QuotesPage_PO();

When("I navigate to Recent Activity page", () => {
  QuotesPagePO.navigateUrl("/retrieve-quote");
  cy.wait()
});

Then("I should be presented with Recent activity page",()=>{
  QuotesPagePO.getHeaderText("Recent Activity");
});

When("I type my Reference", () => {
  QuotesPagePO.typeReferenceNumber("UNI");
});

When("I click Search", () => {
  QuotesPagePO.elements.searchButton().click();
});
Then( "I should be displayed with Quotes matching the entered reference", () => {});
cy.end();