import { tickTimeType, addTimeType } from "./types";

export const tickTime = (resetData: any) => {
  return { type: tickTimeType, resetData: resetData };
};

export const addTime = (num: number) => {
  return { type: addTimeType, payload: num };
};
