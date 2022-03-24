import React, { useState, useRef } from "react";
import axios from "axios";
import * as S from "../styles/play";
const stringSimilarity: any = require("string-similarity");

function Home() {
  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [similarity, setSimilarity] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  let temp: string;

  const inputRef = useRef<HTMLInputElement>(null);

  const Test = () => {
    axios
      .get("https://random-word-form.herokuapp.com/random/noun")
      .then((res: { data: string }) => {
        temp = res.data[0];
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${temp}`)
          .then((res) => {
            setMeaning(res.data[0].meanings[0].definitions[0].definition);
          })
          .catch(() => {
            return;
          });
        axios
          .get(`https://api.pexels.com/v1/search?query=${temp}&per_page=1`, {
            headers: {
              Authorization:
                "563492ad6f9170000100000166d41ae3c98341ae947ae0ad4b543bbc",
            },
          })
          .then((res: any) => {
            setWord(temp);
            setPicture(res.data.photos[0].src.medium);
          })
          .catch(() => {
            return;
          });
      })
      .catch(() => {
        return;
      });
  };

  const checkValue = () => {
    setSimilarity(
      stringSimilarity.compareTwoStrings(word, inputRef.current?.value)
    );
    if (inputRef.current?.value === word) setStatus(true);
    else if (status === true) setStatus(false);
  };

  return (
    <>
      {!picture && <S.Button onClick={Test}>START</S.Button>}
      {picture && (
        <>
          <S.Image src={picture}></S.Image>
          {meaning && <S.Meaning>{meaning}</S.Meaning>}
          {status === true && <S.Word>{word}</S.Word>}
          <S.Input
            ref={inputRef}
            placeholder="Type Someting..."
            maxLength={word.length}
            status={status}
            onChange={checkValue}
          />
          {similarity && <S.Meaning>{similarity * 100} %</S.Meaning>}
        </>
      )}
    </>
  );
}

export default Home;
