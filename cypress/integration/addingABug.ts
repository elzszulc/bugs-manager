import { urls } from "../support/urls"
import { visitingMainPage } from "../support/commands"
import { AddingABug } from "../support/fixtures"

describe('Login to my page', () => {

    context('when user write invlid password', () => {
        it('should display error message', () => {
            visitingMainPage()
            cy.url().should("eq", urls.mainPage)
        })
    })
})
