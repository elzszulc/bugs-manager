import { urls } from "../support/urls"

export function visitingMainPage() {
    return cy
        .visit(urls.mainPage)
        .contains("Bugs Manager")
}