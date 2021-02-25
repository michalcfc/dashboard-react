import React from 'react'

import { 
    ChatAsideStyles,
    ChatRow,
    ChatItem
} from "./ChatAside.styles"
import { ChatAsideProps } from "./ChatAside.d"

const ChatTop: React.FC<ChatAsideProps> = ({
    setCurrentConvers
}) => {

    const chats = [
        {
            id: '1',
            user: "Georg Wieland",
            message: "There are many things that are important to catalog design"
        },
        {
            id: '2',
            user: "Leopold Ebert",
            message: "Turn that burner off and the other burner of burners on"
        },
        {
            id: '3',
            user: "Hanno Engelmann",
            message: "There has been a lot in news lately about the amazing healing properties"
        },
        {
            id: '4',
            user: "Manja Wimmer",
            message: "In addition to being able to locate hard to find cookware products"
        },
        {
            id: '5',
            user: "Juliane Zimmermann",
            message: "Oridnary science uses terms and laws of that very science to..."
        },
        {
            id: '6',
            user: "Ella Wolff",
            message: "Ask yourself which room you will be putting your new system"
        },
        {
            id: '7',
            user: "Monique Grassmann",
            message: "Companies and organizations that understand that"
        },
        {
            id: '8',
            user: "Hilde Thiel",
            message: "In addtion to being able to locate hard to find cookware products"
        },
        {
            id: '9',
            user: "GBettina Witte",
            message: "There are many things thath are important to catalog design"
        },
        {
            id: '10',
            user: "Markus Ehlers",
            message: "There has been a lot in news lately about the amazing healing properties"
        }
    ]

    return (
            <ChatAsideStyles>
                {chats.map(chat => (
                <>
                    <ChatRow 
                        key={chat.id}
                        onClick={() => setCurrentConvers(chat.id)}
                    >
                        <ChatItem>{chat.user}</ChatItem>
                        <ChatItem>{chat.message}</ChatItem>
                    </ChatRow>
                </>
            ))}
            </ChatAsideStyles>
    )
}

export default ChatTop;