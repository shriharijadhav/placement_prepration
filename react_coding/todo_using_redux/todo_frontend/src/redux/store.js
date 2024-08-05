import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const store = legacy_createStore(reducer,applyMiddleware(thunk,logger))