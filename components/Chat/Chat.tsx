import { useState } from "react"

import { ChatProps }  from "./Chat.d"

import ChatAside      from './ChatAside';
import ChatMain       from "./ChatMain"
import ChatWindow     from "./ChatWindow"

const Chat: React.FC<ChatProps> = ({
  messages,
  addMessage,
  writeText
}) => {

  const [currentConvers, setCurrentConvers] = useState<number>(null)

  return (
    <>
      <ChatWindow>
          <ChatAside 
            setCurrentConvers={setCurrentConvers}
          />
          <ChatMain 
            messages={messages}
            writeText={writeText}
            addMessage={addMessage} 
            currentConvers={currentConvers}
          />
      </ChatWindow>
    </>
)
}


export default Chat