import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

const reducer = combineReducers({ auth: authReducer, streams: streamReducer });
export default reducer;
