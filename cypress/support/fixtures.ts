export const BugDetails = (p: Partial<BugDetails> = {}): BugDetails => ({
    title: "Bug title",
    description: "Bug description",
    ...p
})

export const PaginationDetails = (p: Partial<PaginationDetails> = {}): PaginationDetails => ({
    showPage: "50",
    goToPage: "20",
    ...p
})