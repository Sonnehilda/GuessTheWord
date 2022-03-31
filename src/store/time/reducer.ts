import { tickTimeType, addTimeType } from "./types";

const time: number = 10;

interface ReducerType {
  time: number;
  type: string;
  payload: number;
  resetData: any;
}

const timeReducer = (state = time, action: ReducerType) => {
  switch (action.type) {
    case tickTimeType:
      if (state > 0) return state - 1;
      else {
        action.resetData();
        return (state = 10);
      }
    case addTimeType:
      if (state + action.payload <= 10) return state + action.payload;
      else return (state = 10);
    default:
      return state;
  }
};

export default timeReducer;
