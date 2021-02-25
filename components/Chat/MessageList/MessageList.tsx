import { useState }   from 'react';

import { MessageListStyle } from "./MessageList.styles"
import { MessageListProps } from "./MessageList.d"

import MessageBox from '../MessageBox';

const MessageList: React.FC<MessageListProps> = ({
    messages,
    currentConvers
}) => {
return (
    <>
    <MessageListStyle>
        {messages.map(message => {
            return (
            <>
            {currentConvers == message.id &&
                <MessageBox 
                    key={message.id} 
                    message={message.message} 
                />
            }
            </>
        )
        })}
    </MessageListStyle>
    </>
    )}

export default MessageList;