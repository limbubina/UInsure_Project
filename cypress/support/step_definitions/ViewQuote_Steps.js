import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given ("I am in Recent activity page", () =>{
cy.visit("https://quotes.test.uinsure.co.uk/retrieve-quote");
})
