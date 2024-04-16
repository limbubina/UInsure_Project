import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RecentActivityPage_PO from "../page_objects/RecentActivityPage_PO";

const RecentActivityPagePO = new RecentActivityPage_PO();

When("I navigate to Recent Activity page", () => {
  RecentActivityPagePO.navigateUrl("/retrieve-quote");
  cy.wait();
});

Then("I should be presented with Recent activity page", () => {
  RecentActivityPagePO.getHeaderText("Recent Activity");
});

When("I type my {string} into the {string}", (searchText, searchField) => {
  if ((searchField = "ReferenceTextField")) {
    RecentActivityPagePO.typeReferenceNumber(searchText);
  } else if ((searchField = "ClientTextField")) {
    RecentActivityPagePO.typeClientName(searchText);
  } else if ((searchField = "PostCodeTextField")) {
    RecentActivityPagePO.typePostCode(searchText);
  }
});

When("I click on the Search button", () => {
  RecentActivityPagePO.elements.searchButton().click();
});

Then(
  "I shoulds see the matching search results in {string} in Quotes table",
  (column) => {
    // if ((column = "Reference")) {
    //   RecentActivityPagePO.elements.referenceColumnHeader();
    // } else if ((searchField = "Client Name")) {
    //   RecentActivityPagePO.elements.ClientNameColumnHeader();
    // } else if ((searchField = "Post Code")) {
    //   RecentActivityPagePO.elements.PostCodeColumnHeader();
    // }
    RecentActivityPagePO.checkSearchResult(searchText, column);
  });
cy.end();
