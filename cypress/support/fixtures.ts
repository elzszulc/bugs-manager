export const BugDetails = (p: Partial<BugDetails> = {}): BugDetails => ({
    title: "Bug title",
    description: "Bug description",
    ...p
})