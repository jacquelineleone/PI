import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
//middleware para realizar acciones asyncronas
//imp el reducer:
import rootReducer from "../reducer";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store;