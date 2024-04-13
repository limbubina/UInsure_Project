import {
  Given,
  When,
  Then,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_PO from "../page_objects/LoginPage_PO";
import cypress from "cypress";

const LoginPagePO = new LoginPage_PO();

Given("I am logged with email address {string} and password {string}", (userEmail, userPassword) => {
    LoginPagePO.navigateToLoginPage("");
    LoginPagePO.type_Email(cypress.env('username'));
    LoginPagePO.type_Password(cypress.env('password'));
    LoginPagePO.click_SignIn();
    LoginPagePO.valid_SignIn();//assert that user has logged in
  }
);

// Before(() => {
//   cy.log("Executes before each scenario");
//   cy.clearAllLocalStorage();
// });

// After(() => {
//   cy.log("Executes aftereach each scenario");
//   cy.clearAllLocalStorage();
// });

// When("I wait for {int} seconds", (seconds) => {
//   cy.wait(seconds * 1000);
// });
