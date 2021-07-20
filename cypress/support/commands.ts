import { urls } from "../support/urls"
import { mainPageAttibutes } from "../support/directories"

export function visitingMainPage() {
    return cy
        .visit(urls.mainPage)
        .contains("Bugs Manager")
        .url().should("eq", urls.mainPage)
}

export function addingBug(p: BugDetails) {
    return cy
        .get(mainPageAttibutes.titleInput)
        .type(p.title)
        .get(mainPageAttibutes.descriptionInput)
        .type(p.description)
        .get(mainPageAttibutes.addingBugButton)
        .click()
        .request('POST', 'urls.addingABugApi').its('status').should('be.equal', 200)
        /* TO DO: find a way to wait for displaying the last result on the table */
        .get('tr')
        .last()
        .contains(('Bug title'), { timeout: 20000 }).should('be.visible')
}

export function deletingBug() {
    return cy
        .contains(('Bug title'), { timeout: 10000 }).should('be.visible')
        .get(mainPageAttibutes.deletingButton)
        .last()
        .click()
        .request('DELETE', 'urls.addingABugApi').its('status').should('be.equal', 200)
}

export function navigatePagination() {
    return cy
        .get(mainPageAttibutes.selectingResultsNumber)
        .select
}