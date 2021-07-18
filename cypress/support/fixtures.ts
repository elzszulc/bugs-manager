export const AddingABug = (p: Partial<BugDetails> = {}): BugDetails => ({
    title: "Bug title",
    description: "Bug description",
    ...p
})