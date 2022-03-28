import { combineReducers } from "redux";
import timeReducer from "./time/reducer";

const rootReducer = combineReducers({ time: timeReducer });

export default rootReducer;
