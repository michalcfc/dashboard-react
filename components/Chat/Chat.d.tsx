
export interface Messages {
    id: number
    user: string
    message: string
    timestamp: Date
  }

  export interface Messages {
    id: number
    user: string
    message: string
    timestamp: Date
  }

export interface ChatProps {
    messages: Messages[]
    writeText?: (e: HTMLInputElement) => void
    addMessage: () => void
}