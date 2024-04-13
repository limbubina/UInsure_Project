import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import QuotesPage_PO from "../page_objects/QuotesPage_PO";

const QuotesPagePO = new QuotesPage_PO();

When("I navigate to Recent Activity page", () => {
  QuotesPagePO.navigateUrl("/retrieve-quote");
});

Then("I should be presented with Recent activity page",()=>{});
When("I click on Reference", () => {});
When("I enter a string of 3 characters in length", () => {});
When("I click Search", () => {});
Then( "I should be displayed with Quotes matching the entered reference", () => {});
