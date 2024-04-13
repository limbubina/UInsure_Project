import Base_PO from "./Base_PO";

class LoginPage_PO extends Base_PO {
  elements = {
    email_Textfield: () => cy.get("#login-email-address"),
    password_Textfield: () => cy.get("#login-password"),
    signIn_Button: () => cy.get("[action] .MuiButton-label"),
    valid_Login_Page: () => cy.get('[data-testid="qt-homeinsurance-bc"]'),
    invalid_Login_Page: () => cy.get('[data-testid="invalid-login"]')
  };

  navigateToLoginPage() {
    super.navigateUrl("");
  }

  type_Email(userEmail) {
    this.elements.email_Textfield().type(userEmail);
  }

  type_Password(userPassword) {
    this.elements.password_Textfield().type(userPassword);
  }

  click_SignIn() {
    this.elements.signIn_Button().click();
  }

  valid_SignIn() {
    this.elements.valid_Login_Page().should("be.visible");
  }

  invalid_signIn() {
    this.elements.invalid_Login_Page().should("be.visible");
  }
}
export default LoginPage_PO;
