import { addScoreType, setScoreType } from "./types";

const score = 0;

interface ReducerType {
  score: number;
  type: string;
  payload: number;
}

const scoreReducer = (state = score, action: ReducerType) => {
  switch (action.type) {
    case addScoreType:
      return state + 1;
    case setScoreType:
      return (state = action.payload);
    default:
      return state;
  }
};

export default scoreReducer;
