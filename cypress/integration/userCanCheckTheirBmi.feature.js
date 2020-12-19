/// <reference types="Cypress" />

describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
        cy.visit("http://localhost:3000")
        cy.contains("BMI Calculator")
        cy.get("[data-cy='weight']").type("90")
        cy.get("[data-cy='height']").type('190')
        cy.get("[data-cy='calculate']").click()
        cy.get("[data-cy='bli-message']").should("contain", "You are Normal with a BMI of 24.93")

    it("displays a BMI value of 26.01", () => {
            cy.get('#results').should('contain', "26.01")
        })
        it("displays a message of you are Overweight", () => {
            cy.get('#results').should('contain', "Overweight")
        })
    })
})
