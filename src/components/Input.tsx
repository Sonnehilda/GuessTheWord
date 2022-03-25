import React, { useRef } from "react";
import * as S from "../styles/play";
const stringSimilarity: any = require("string-similarity");

interface InputProps {
  word: string;
  temp: string;
  status: boolean;
  setStatus: any;
  setSimilarity: any;
}

const Input = React.memo(function Input({
  word,
  temp,
  status,
  setStatus,
  setSimilarity,
}: InputProps) {
  const inputRef = useRef<any>([]);

  const onKeyDown = (e: any) => {
    const id: string = e.target.id;
    const key: string = e.key.toLowerCase();
    const currentRef: number = parseInt(e.target.id);

    if (currentRef > 0) {
      if (key === "backspace" || key === "arrowleft") {
        e.preventDefault();
        const prevRef: string = (currentRef - 1).toString();

        if (key !== "arrowleft") inputRef.current[id].value = "";
        inputRef.current[prevRef].focus();
      }
    }
    if (currentRef + 1 < word.length) {
      if (key.length === 1 || key === "arrowright") {
        e.preventDefault();
        const nextRef: string = (currentRef + 1).toString();
        const nextNextRef: string = (currentRef + 2).toString();

        if (key !== "arrowright")
          if (inputRef.current[id].value === "") {
            inputRef.current[id].value = key;
            inputRef.current[nextRef].focus();
          } else if (currentRef < word.length) {
            inputRef.current[nextRef].value = key;
            if (currentRef + 2 < word.length)
              inputRef.current[nextNextRef].focus();
            else inputRef.current[nextRef].focus();
          }
      }
    }

    word.split("").forEach((i, index) => {
      if (inputRef.current[index].value !== "")
        if (temp === "") temp = inputRef.current[index].value;
        else temp = temp + inputRef.current[index].value;
    });

    console.log(temp + ", " + word);

    const similarity: number = stringSimilarity
      .compareTwoStrings(word, temp)
      .toFixed(1);

    setSimilarity(similarity);

    if (Math.floor(similarity) === 1) setStatus(true);
    else setStatus(false);

    temp = "";
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
              ref={(itself) => (inputRef.current[index] = itself)}
              maxLength={1}
              status={status}
              onKeyDown={(e) => onKeyDown(e)}
            />
          );
        })}
      </S.InputWrapper>
    </>
  );
});

export default Input;
