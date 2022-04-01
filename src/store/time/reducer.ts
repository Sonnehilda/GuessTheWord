import { tickTimeType, setTimeType } from "./types";

const time: number = 200;

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
        return (state = 200);
      }
    case setTimeType:
      return (state = action.payload);
    default:
      return state;
  }
};

export default timeReducer;
