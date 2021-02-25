import { MouseEvent } from "react";

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

export interface ChatMainProps {
  messages: Messages[]
  currentConvers: number
  addMessage: () => void
  writeText?: (e: HTMLInputElement) => void
}