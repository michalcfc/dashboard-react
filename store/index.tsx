import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";
import { cartReducer } from "./Cart/reducers";
import { loginReducer } from "./Login/reducers";
import { chatReducer } from "./Chat/reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

  const rootReducer = combineReducers({
      cart: cartReducer,
      login: loginReducer,
      chat: chatReducer,
    });

  export type AppState = ReturnType<typeof rootReducer>;

  export default function configureStore(preloadedState) {
    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware())
      // applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
    );
  }
  
