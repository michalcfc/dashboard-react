import React from 'react'

import { ChatTopProps } from "./ChatTop.d"
import { ChatTopStyle } from "./ChatTop.styles"

import Avatar from "@components/Avatar"

const ChatTop: React.FC<ChatTopProps> = () => (

        <ChatTopStyle>
            <Avatar 
                img="/img/profile-9.jpg"
            />
        </ChatTopStyle>

)

export default ChatTop;