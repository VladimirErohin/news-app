import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducer} from "./userReducer";
import {authorReducer} from "./authorsReducer";


const rootReducer=combineReducers({
    news:newsReducer,
    users:userReducer,
    author:authorReducer
});

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
