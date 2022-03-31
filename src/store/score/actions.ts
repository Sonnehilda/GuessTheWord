import { addScoreType, setScoreType } from "./types";

export const addScore = (num: number) => {
  return { type: addScoreType, payload: num };
};
export const setScore = (num: number) => {
  return { type: setScoreType, payload: num };
};
