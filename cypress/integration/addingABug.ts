import { urls } from "../support/urls"
import { visitingMainPage, addingBug } from "../support/commands"
import { BugDetails } from "../support/fixtures"

describe('Main page of bug manager', () => {

    context('When user has an access to Bug Manager', () => {
        it('should be able to add a bug', () => {
            visitingMainPage()
            addingBug(BugDetails())
        })
    })
})
