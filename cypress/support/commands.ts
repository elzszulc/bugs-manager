import { urls } from "../support/urls"
import { mainPageAttibutes } from "../support/directories"

export const CYPRESS_pageLoadTimeout=100000
export const CYPRESS_defaultTimeout=2000

export function visitingMainPage() {
    return cy
        .visit(urls.mainPage, {timeout: CYPRESS_pageLoadTimeout})
        .contains(mainPageAttibutes.pageTitle)
        .url().should("eq", urls.mainPage)
}

export function addingBug(p: BugDetails) {
    return cy
        .get(mainPageAttibutes.titleInput)
        .type(p.title)
        .get(mainPageAttibutes.descriptionInput)
        .type(p.description)
        .get(mainPageAttibutes.addingBugButton)
        .wait(CYPRESS_defaultTimeout)
        .click()
        .request('POST', 'urls.addingABugApi').its('status').should('be.equal', 200)
        .get('tr')
        .should('contain', p.title)
}

export function deletingBug(p: BugDetails) {
    return cy
        .contains((p.title), { timeout: CYPRESS_pageLoadTimeout }).should('be.visible')
        .get(mainPageAttibutes.deletingButton)
        .last()
        .click()
        .wait(CYPRESS_defaultTimeout)
        .request('DELETE', 'urls.addingABugApi').its('status').should('be.equal', 200)
        .get('tr')
        .should('not.contain', p.title)
}

export function navigatePagination(p: PaginationDetails) {
    return cy
        .get(mainPageAttibutes.displayingPagination)
        .should('be.visible')
        .get(mainPageAttibutes.selectingResultsNumber)
        .select(p.showPage).should('have.value', p.showPage)
        .get(mainPageAttibutes.inputNumber)
        .clear()
        .type(mainPageAttibutes.goToPageNumber)
        .should('have.value', mainPageAttibutes.goToPageNumber)
}