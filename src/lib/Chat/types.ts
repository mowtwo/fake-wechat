
export type ChatType = "me" | "other"

export type ChatData = {
    type: ChatType,
    message: string
}