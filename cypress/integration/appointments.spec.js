describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  })
  
  xit("should book an interview" , () => {
    cy.get("[alt=Add]")
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones", {delay: 50});

    cy.get("[alt='Sylvia Palmer']")
      // for some reason the html from LHL contains two Sylvia Palmers despite the interviewers having different names and photos
      .first()
      .click();

    cy.contains("Save")
      .click()

    cy.contains(".appointment__card--show", "Lydia Miller-Jones")
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  xit ("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({force: true});

    cy.get("[alt='Sylvia Palmer']")
    // "Tori Malcolm" interviewer is named incorrectly within boilerplate test API from LHL
    .eq(1)
    .click();

    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Ryan MacEachern", {delay: 100})

    cy.contains("Save")
      .click()

    cy.contains(".appointment__card--show", "Ryan MacEachern");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  })

  it ("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .first()
      .click({force: true});

    cy.contains("Confirm")
      .click();

    cy.contains("DELETING").should("exist");
    cy.contains("DELETING").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");


  })
})