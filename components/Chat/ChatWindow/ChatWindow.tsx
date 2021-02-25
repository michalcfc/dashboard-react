import React from 'react'

import { 
    ChatWindowStyle,
} from "./ChatWindow.styles"
import { ChatWindowProps } from "./ChatWindow.d"

import Grid from "@components/Grid"

const ChatWindow: React.FC<ChatWindowProps> = ({children}) => (

        <ChatWindowStyle>
            <Grid 
                columns="repeat(12,minmax(0,1fr))" 
                gridGap="20px"
            >
            {children}
            </Grid>
        </ChatWindowStyle>

)

export default ChatWindow;