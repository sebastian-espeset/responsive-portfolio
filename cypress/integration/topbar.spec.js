describe("renders the topbar", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get(".topbar").should("exist");
  });
  it("hamburger menu opens correctly on user click", () => {
    cy.visit("/");
    cy.get(".hamburger").click();
  });
  it("navigates to specific component on user click", () => {
    cy.visit("/");
    cy.get(".hamburger").click();
    cy.get("ul > :nth-child(2) > a").click();
  });
});

