import React from 'react'

import Avatar from 'components/Avatar';
import { MessageBoxProps } from "./MessageBox.d"
import { 
    MessageContainer, 
    MessageContent 
} from "./MessageBox.styles"

const MessageBox: React.FC<MessageBoxProps> = ({message}) => (

        <MessageContainer>
            <Avatar
                img="img/profile-9.jpg"
            />
            <MessageContent>
               {message}
            </MessageContent>
        </MessageContainer>

)

export default MessageBox;