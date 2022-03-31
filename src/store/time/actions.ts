import { tickTimeType, setTimeType } from "./types";

export const tickTime = (resetData: any) => {
  return { type: tickTimeType, resetData: resetData };
};

export const setTime = (num: number) => {
  return { type: setTimeType, payload: num };
};
