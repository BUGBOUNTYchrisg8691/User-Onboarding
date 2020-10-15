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

describe("check input value text", () => {
  const names = ["user", "email", "password"]
  // const user = "user"
  // const email = "email"
  // const passwd = "password"
  it("get all inputs and check that they are equal to form key", () => {
    cy.visit("index.html")
    names.forEach(name => {
      cy.get(`input[name="${name}"]`).type("test")
    cy.get(`select[name="role"]`).select('instructor')
    cy.get(`input[name="${terms}"]`).check()
    })
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
