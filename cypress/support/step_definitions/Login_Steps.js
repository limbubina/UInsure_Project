import {Given,When,Then, Before} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_PO from "../page_objects/LoginPage_PO";

const LoginPagePO = new LoginPage_PO();

Given("I navigate to UInsure login Page", () => {
  LoginPagePO.navigateToLoginPage("");
});

When("I type a valid email address {string} and password {string}", (userEmail, userPassword) => {
    LoginPagePO.type_Email(userEmail);
    LoginPagePO.type_Password(userPassword);
});

When("I click Sign in button", () => {
  LoginPagePO.click_SignIn();
});

Then("I should see {string}", (experience) => {
  switch (experience) {
    case "Quote Page":
      LoginPagePO.valid_SignIn();
      break;
    default:
      LoginPagePO.invalid_signIn();
  }
});

