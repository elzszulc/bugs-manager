import { urls } from "../support/urls"
import { mainPage } from "../support/directories"

export function visitingMainPage() {
    return cy
        .visit(urls.mainPage)
        .contains("Bugs Manager")
        .url().should("eq", urls.mainPage)
}

export function addingBug(p: BugDetails) {
    return cy
        .get(mainPage.titleInput)
        .type(p.title)
        .get(mainPage.descriptionInput)
        .type(p.description)
        .get(mainPage.addingBugButton)
        .click()
}