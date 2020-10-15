// arrange
describe("My First Test", function() {
  // act
  it("Does not do much", function() {
    // assert
    expect(true).to.equal(true)
  })
})

describe("My Second Test", () => {
  it("Visits a new site", () => {
    cy.visit("index.html")
  })
})

describe("List of methods", () => {
  it("methods", () => {
    // visits a site
    cy.visit("index.html")
    // pauses test, we only need to do this once
    cy.pause()
    // finds el that contains string "type" and clicks it
    // test fails if el is not found
    cy.contains("type").click()
    // asserts that link clicked above
    // leads to url path containing "/commands/actions"
    cy.url()
      .should("include", "/commands/actions")
    // looks for input el with css classname "action-email"
    // and enters "fake@email.com" in input
    // then checks if the input's value reflects the text
    // that we typed
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
    })
})