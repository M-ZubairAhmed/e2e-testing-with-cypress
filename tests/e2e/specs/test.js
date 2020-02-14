// https://docs.cypress.io/api/introduction/api.html

describe("Login tests", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should show error when email or password is empty", () => {
    // Find button login and click it
    cy.findByText("LOGIN").click();

    // Check if we got the error message
    // cy.get('[data-cy=error]').should('contain', "Email and Password both fields should be populated")
    cy.findByText("Email and Password both fields should be populated").should(
      "exist"
    );
  });

  it("Should show error for non existing user login", () => {
    // Find the email input
    cy.findByPlaceholderText("Enter your email")
      .clear()
      .type("invalid@email.com");

    // Find the password input
    cy.findByPlaceholderText("Enter your password")
      .clear()
      .type("wrongpassword");

    // Submit the form
    cy.findByText("LOGIN").click();

    // Check for error message
    cy.findByText("Invalid email or password").should("exist");
  });

  it("Should pass for existing user login", () => {
    // Find the email input
    cy.findByPlaceholderText("Enter your email")
      .clear()
      .type("zubair@email.com");

    // Find the password input
    cy.findByPlaceholderText("Enter your password")
      .clear()
      .type("password");

    // Submit the form
    cy.findByText("LOGIN").click();

    // cy.wait(2000);

    // Check for error message
    cy.findByText("Invalid email or password").should("not.exist");

    cy.findByPlaceholderText("Enter your email").should('not.exist')

    cy.findByPlaceholderText("Enter your password").should('not.exist')

    cy.findByAltText("user display image").should('exist');
    cy.findByText('Hej, Zubair')
  });
});
