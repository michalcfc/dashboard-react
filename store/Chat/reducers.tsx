import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE
} from './types'

import produce from "immer"

const initialState: ChatState = {
  messages: [{
    id: 1,
    user: 'Mike',
    message: "First message from app",
    timestamp: new Date('2021-02-13 21:45:00')
  }]
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
 return produce(state, draft => {
    switch (action.type) {

      case SEND_MESSAGE: 
          draft.messages = [...draft.messages, action.message]
        return;

      // case DELETE_MESSAGE:
      //     draft.messages = draft.messages.filter(
      //       message => message.timestamp
      //     );
        return;

      default:
        return draft
    }
})
}