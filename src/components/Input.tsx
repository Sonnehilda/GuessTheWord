import React, { useRef } from "react";
import * as S from "../styles/play";

const stringSimilarity: any = require("string-similarity");

type setBooleanState = React.Dispatch<React.SetStateAction<boolean>>;

interface InputProps {
  word: string;
  setStatus: setBooleanState;
}

const Input = React.memo(function Input({ word, setStatus }: InputProps) {
  const inputRef = useRef<any>([]);

  const onKeyDown = (e: any) => {
    const id: string = e.target.id;
    const key: string = e.key.toLowerCase();
    const currentRef: number = parseInt(id);

    let temp: string = "";

    if (currentRef > 0) {
      if (key === "backspace" || key === "arrowleft") {
        if (key === "arrowleft") e.preventDefault();
        const prevRef: string = (currentRef - 1).toString();
        if (inputRef.current[id].value === "") {
          if (key !== "arrowleft") inputRef.current[id].value = "";
          inputRef.current[prevRef].focus();
        } else {
          if (key !== "arrowleft") inputRef.current[id].value = "";
          inputRef.current[currentRef].focus();
        }
      }
    }

    if (currentRef + 1 < word.length) {
      if (key.length === 1 || key === "arrowright") {
        e.preventDefault();
        const nextRef: string = (currentRef + 1).toString();
        if (key !== "arrowright")
          if (inputRef.current[id].value === "") {
            inputRef.current[id].value = key;
          } else if (currentRef < word.length) {
            inputRef.current[nextRef].value = key;
          }
        if (inputRef.current[id].value === "") {
          inputRef.current[nextRef].focus();
        } else if (currentRef < word.length) {
          inputRef.current[nextRef].focus();
        }
      }
    }

    word.split("").forEach((i, index) => {
      if (inputRef.current[index].value !== "")
        if (temp === "") temp = inputRef.current[index].value;
        else temp = temp + inputRef.current[index].value;
    });

    const similarity: number = stringSimilarity
      .compareTwoStrings(word.toLowerCase(), temp.toLowerCase())
      .toFixed(1);

    if (Math.floor(similarity) === 1) setStatus(true);
  };

  return (
    <>
      {" "}
      <S.InputWrapper>
        {word.split("").map((i, index) => {
          return (
            <S.Input
              id={index.toString()}
              key={index}
              ref={(input) => (inputRef.current[index] = input)}
              maxLength={1}
              onKeyDown={(e) => onKeyDown(e)}
              autoComplete="off"
            />
          );
        })}
      </S.InputWrapper>
    </>
  );
});

export default Input;
