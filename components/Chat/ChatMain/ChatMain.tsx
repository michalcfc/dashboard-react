import { useState }   from 'react';

import { ChatMainStyle } from "./ChatMain.styles"
import { ChatMainProps } from "./ChatMain.d."

import ChatTop        from "./../ChatTop"
import MessageList    from './../MessageList';
import MessageInput   from './../MessageInput'

import {
    sendMessage,
    deleteMessage
} from "../../../store/Chat/actions";

const ChatMain: React.FC<ChatMainProps> = ({
    messages,
    addMessage,
    writeText,
    currentConvers
}) => {

    const [message, setMessage] = useState("");

    const onChage = (e) => {
        setMessage(e.target.value)
      }

    return (
    <>
    <ChatMainStyle>
        <ChatTop 
            // teamName={this.props.agentProfile.teamName}
            // imageUrl={this.props.agentProfile.imageUrl}
            // onClose={this.props.onClose}
        />
        <MessageList 
            messages={messages}
            currentConvers={currentConvers}
            // imageUrl={this.props.agentProfile.imageUrl}
            // onDelete={this.props.onDelete}
            />
        <MessageInput 
            writeText={writeText}
            addMessage={addMessage} 
        />
    </ChatMainStyle>
    </>
    )}

export default ChatMain;