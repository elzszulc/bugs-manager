import { visitingMainPage, addingBug, deletingBug, navigatePagination } from "../support/commands"
import { BugDetails } from "../support/fixtures"

describe('Main page of bug manager', () => {
    beforeEach(() => {
        visitingMainPage()
      })

    context('When user has an access to Bug Manager', () => {
        it('should be able to add a bug', () => {
            addingBug(BugDetails())
        })
    })

    context('When user has an access to Bug Manager', () => {
        it('should be able to delete a bug', () => {
            deletingBug()
        })
    })

    context('When user has an access to Bug Manager', () => {
        it('should be able to navigate by list of result and moving to each page ', () => {
            navigatePagination()
        })
    })
})
