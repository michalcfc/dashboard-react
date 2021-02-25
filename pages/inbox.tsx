import { useState }   from 'react';
import { connect }    from "react-redux";

import { ChatProps }  from "./Inbox.d"

import Chat from "@components/Chat"

import { 
  sendMessage,
   deleteMessage
} from "../store/Chat/actions";

const Inbox: React.FC<ChatProps> = ({
  messages
}) => {

  const [message, setMessage] = useState(""); 

  const writeText = (e) => {
    setMessage(e.target.value)
  }

  const addMessage = () => {
    sendMessage({
      id: 2,
      user: "admin",
      message: message,
      timestamp: new Date(),
    });
  }

  return (
    <>
     <Chat 
      messages={messages}
      writeText={(e) => writeText(e)}
      addMessage={() => addMessage()}
     />
    </>
)
}

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
      }
    };

  const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message)),
        deleteMessage: (id) => dispatch(deleteMessage(id)),
    }
  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);