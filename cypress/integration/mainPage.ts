import { visitingMainPage, addingBug, deletingBug, navigatePagination } from "../support/commands"
import { BugDetails, PaginationDetails } from "../support/fixtures"

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
            deletingBug(BugDetails())
        })
    })

    context('When user has an access to Bug Manager', () => {
        it('should be able to navigate a pagination ', () => {
            navigatePagination(PaginationDetails())
        })
    })
})
