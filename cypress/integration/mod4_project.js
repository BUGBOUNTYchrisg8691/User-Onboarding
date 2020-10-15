const name = "Christopher"
const email = "fake@email.com"
const passwd = "thisIsShitPassword"
const role = "instructor"
const terms = "terms"

describe("Test name input2", () => {
  it("search for name input and type name and assert value", () => {
    cy.visit("index.html")
    cy.get('input[name="user"]')
      .type(name)
      .should("have.value", name)
    cy.get('input[name="email"]')
      .type(email)
      .should("have.value", email)
    cy.get('input[name="password"]')
      .type(passwd)
      .should("have.value", passwd)
    cy.get('select[name="role"]').select(role)
      .should("have.value", role)
    cy.get('[type="checkbox"]').check()
      .should("have.checked", true)
  })
})

describe("check empty form sub", () => {
  it("check if submit is clickable if field left empty", () => {
    cy.visit("index.html")
    cy.get('input[name="user"]')
      .type(name)
      .should("have.value", name)
    cy.get('input[name="email"]')
      .type(email)
      .should("have.value", email)
    cy.get('select[name="role"]')
      .select("instructor")
      .should("have.value", role)
    cy.get('input[name="password"]')
      .type(passwd)
      .should("have.value", passwd)
    cy.get("button").should("be.disabled")
  })
})

// describe("Test name input", () => {
//   it("search for name input and type name", () => {
//     cy.visit("index.html")
//     cy.get('input[name="user"')
//       .type("Christopher")
//   })
// })

// describe("Test email input", () => {
//   const email = "fake@email.com"
//   it("get email input and type email in it", () => {
//     cy.visit("index.html")
//     cy.get('input[name="email"')
//       .type(email)
//   })
// })
