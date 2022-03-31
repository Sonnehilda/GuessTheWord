import { combineReducers } from "redux";
import scoreReducer from "./score/reducer";
import timeReducer from "./time/reducer";

const rootReducer = combineReducers({ time: timeReducer, score: scoreReducer });

export default rootReducer;
