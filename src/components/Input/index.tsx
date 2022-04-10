import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../../store/score/actions";
import { setTime } from "../../store/time/actions";
import * as S from "./styles";

const stringSimilarity: any = require("string-similarity");

type setBooleanState = React.Dispatch<React.SetStateAction<boolean>>;

interface InputProps {
  word: string;
  status: boolean;
  setStatus: setBooleanState;
}

const Input = React.memo(function Input({
  word,
  status,
  setStatus,
}: InputProps) {
  const inputRef = useRef<any>([]);

  useEffect(() => {
    if (status === false) {
      inputRef.current[0].focus();
    }
  }, [status]);

  const dispatch = useDispatch();

  const onKeyDown = (e: any) => {
    const id: string = e.target.id;
    const key: string = e.key.toUpperCase();
    const currentRef: number = parseInt(id);

    let temp: string = "";

    if (currentRef > 0) {
      if (key === "BACKSPACE" || key === "ARROWLEFT") {
        if (key === "ARROWLEFT") e.preventDefault();
        const prevRef: string = (currentRef - 1).toString();
        if (inputRef.current[id].value === "") {
          if (key !== "ARROWLEFT") inputRef.current[id].value = "";
          inputRef.current[prevRef].focus();
        } else {
          if (key !== "ARROWLEFT") inputRef.current[id].value = "";
          inputRef.current[currentRef].focus();
        }
      }
    }

    if (currentRef + 1 <= word.length) {
      if (key.length === 1 || key === "ARROWRIGHT") {
        e.preventDefault();
        const nextRef: string = (currentRef + 1).toString();
        if (key !== "ARROWRIGHT")
          if (inputRef.current[id].value === "") {
            inputRef.current[id].value = key;
          } else if (
            currentRef < word.length &&
            currentRef + 1 !== word.length
          ) {
            inputRef.current[nextRef].value = key;
          }
        if (currentRef + 1 !== word.length) {
          if (inputRef.current[id].value === "") {
            inputRef.current[nextRef].focus();
          } else if (currentRef < word.length) {
            inputRef.current[nextRef].focus();
          }
        }
      }
    }

    word.split("").forEach((i, index) => {
      if (inputRef.current[index].value !== "")
        if (temp === "") temp = inputRef.current[index].value;
        else temp = temp + inputRef.current[index].value;
    });

    const similarity: number = stringSimilarity
      .compareTwoStrings(word.toUpperCase(), temp.toUpperCase())
      .toFixed(1);

    if (Math.floor(similarity) === 1) {
      dispatch(addScore(1));
      dispatch(setTime(200));
      setStatus(true);
    }
  };

  return (
    <>
      <S.InputWrapper>
        {word.split("").map((i, index) => {
          return (
            <S.Input
              id={index.toString()}
              key={index}
              ref={(input) => (inputRef.current[index] = input)}
              maxLength={1}
              onKeyDown={onKeyDown}
              autoComplete="off"
            />
          );
        })}
      </S.InputWrapper>
    </>
  );
});

export default Input;
