const name = "Christopher"
const email = "fake@email.com"
const passwd = "thisIsShitPassword"
const role = "instructor"
const terms = "terms"

const nonEmail = "fake.com"
const nonPasswd = "thi"

describe("Module 4 Project tests", () => {
  beforeEach(() => {
    cy.visit("index.html")
  })
  const nameInput = () => cy.get('input[name="user"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwdInput = () => cy.get('input[name="password"]')
  const roleInput = () => cy.get('#roleDropdown')
  const termsChkbox = () => cy.get('input[type="checkbox"]')
  const submitBtn = () => cy.get('button')

  it ("get the name input and type a name in it", () => {
    nameInput()
      .type("Christopher")   
  })
  
  it("assert check if the text inputted contains the name you provided", () => {
    nameInput()
      .should("have.value", "")
      .type("Christopher")
      .should("have.value", "Christopher")
  })

  it("Get the `Email` input and type an email address in it", () => {
    emailInput()
      .should("have.value", "")
      .type("chrisg@gmail.com")
      .should("have.value", "chrisg@gmail.com")
  })

  it("Get the `password` input and type a password in it", () => {
    passwdInput()
      .should("have.value", "")
      .type("abcdef1234")
      .should("have.value", "abcdef1234")
  })

  describe("checkbox", () => {
    it('Check to see if a user can check the terms of service box', () => {
      nameInput()
        .should("have.value", "")
        .type("Christopher")
        .should("have.value", "Christopher")
      emailInput()
        .should("have.value", "")
        .type("chrisg@gmail.com")
        .should("have.value", "chrisg@gmail.com")
      passwdInput()
        .should("have.value", "")
        .type("abcdef1234")
        .should("have.value", "abcdef1234")
      roleInput()
        .select("instructor")
        .should("have.value", "instructor")
      termsChkbox()
        .check()
        .should("have.checked", true)
    })
  })

  describe("submit button", () => {
    it("Check to see if a user can submit the form data", () => {
      nameInput()
        .should("have.value", "")
        .type("Christopher")
        .should("have.value", "Christopher")
      emailInput()
        .should("have.value", "")
        .type("chrisg@gmail.com")
        .should("have.value", "chrisg@gmail.com")
      passwdInput()
        .should("have.value", "")
        .type("abcdef1234")
        .should("have.value", "abcdef1234")
      roleInput()
        .select("instructor")
        .should("have.value", "instructor")
      termsChkbox()
        .check()
        .should("have.checked", true)
      submitBtn()
        .should("be.enabled")
    })
  })
  describe("disabled button", () => {
    it("Check to see if a user can submit the form data with empty field", () => {
      nameInput()
        .should("have.value", "")
        .type("Christopher")
        .should("have.value", "Christopher")
      emailInput()
        .should("have.value", "")
        .type("chrisg@gmail.com")
        .should("have.value", "chrisg@gmail.com")
      passwdInput()
        .should("have.value", "")
        .type("abcdef1234")
        .should("have.value", "abcdef1234")
      termsChkbox()
        .check()
        .should("have.checked", true)
      submitBtn()
        .should("not.be.enabled")
    })
  })
})

// describe("Get the name input and type a name in it", () => {
//   it('finds name input and enter name the field', () => {
//     cy.visit("index.html")
//     cy.get('input[name="user"]')
//       .type(name)
//   });
// })

// describe('Use an assertion to ', () => {
//   it('finds name input, enters text in field and asserts that the value contains the text', () => {
//     cy.get('input[name="user"')
//       .clear()
//       .type(name)
//       .should("have.value", name)
//   }); 
// })

// describe('Get the "Email" input and type an email address in it', () => {
//   it('finds email input and enters email address in field', () => {
//     cy.get('input[name="email"]')
//       .type(email)
//       .should("have.value", email)
//   });
// })

// describe('Get the "password" input and type a password in it', () => {
//   it('find password input and enter password in field', () => {
//     cy.get('input[name="password"]')
//       .type(password)
//       .should("have.value", password)
//   })
// })

// describe('Check to see if a user can check the terms of service box', () => {
//   it('find checkbox and check it', () => {
//     cy.get('input[type="checkbox"]')
//       .check()
//       .should("have.checked", true)
//   })
// })

// describe('Check to see if a user can submit the form data', () => {
//   it('find button and check submit functionality', () => {
    
//   })
// })

// describe("Test name input2", () => {
//   it("search for name input and type name and assert value", () => {
//     cy.visit("index.html")
//     cy.get('input[name="user"]')
//       .type(name)
//       .should("have.value", name)
//     cy.get('input[name="email"]')
//       .type(email)
//       .should("have.value", email)
//     cy.get('input[name="password"]')
//       .type(passwd)
//       .should("have.value", passwd)
//     cy.get('select[name="role"]').select(role)
//       .should("have.value", role)
//     cy.get('[type="checkbox"]').check()
//       .should("have.checked", true)
//   })
// })

// describe("check empty form sub", () => {
//   it("check if submit is clickable if field left empty", () => {
//     cy.visit("index.html")
//     cy.get('input[name="user"]')
//       .type(name)
//       .should("have.value", name)
//     cy.get('input[name="email"]')
//       .type(nonEmail)
//       .should("have.value", nonEmail)
//     cy.get('select[name="role"]')
//       .select("instructor")
//       .should("have.value", role)
//     cy.get('input[name="password"]')
//       .type(nonPasswd)
//       .should("have.value", nonPasswd)
//     cy.get("button").should("be.disabled")
//   })
// })


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
