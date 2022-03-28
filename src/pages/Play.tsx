import React, { useState } from "react";
import axios from "axios";
import * as S from "../styles/play";

import Input from "../components/Input";
import Timer from "../components/Timer";

const randomWords = require("random-words");

function Home() {
  const compliments: string[] = [
    "Amazing!",
    "Awesome!",
    "Beautiful!",
    "Bravo!",
    "Brilliant!",
    "Clever!",
    "Cool!",
    "Excellent!",
    "Fabulous!",
    "Fantastic!",
    "Good Job!",
    "Great Job!",
    "Impressive!",
    "Incredible!",
    "Magnificent!",
    "Nice!",
    "Outstanding!",
    "Perfect!",
    "Smart!",
    "Terrific!",
    "Wonderful!",
  ];

  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  let temp: string = "";
  let temp2: string = "";

  const initData = (e: any) => {
    e.target.disabled = true;
    temp = randomWords();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${temp}`)
      .then((res) => {
        temp2 = res.data[0].meanings[0].definitions[0].definition;
      })
      .catch((err) => {
        console.log(err);
        temp2 = "";
        return;
      });
    axios
      .get(`https://api.pexels.com/v1/search?query=${temp}&per_page=1`, {
        headers: {
          Authorization:
            "563492ad6f9170000100000166d41ae3c98341ae947ae0ad4b543bbc",
        },
      })
      .then((res) => {
        setWord(temp.toLowerCase());
        setPicture(res.data.photos[0].src.medium);
        setMeaning(temp2);
        temp = "";
      })
      .catch((err) => {
        console.log(err);
        temp2 = "";
        return;
      });
  };

  const resetData = () => {
    console.log("END");
  };

  console.log("RE_RENDER");
  console.log(word);

  return (
    <>
      {" "}
      {!picture && (
        <S.Button
          disabled={temp2 === "execute" ? true : false}
          onClick={initData}
        >
          START
        </S.Button>
      )}
      {picture && (
        <>
          <S.ImageWrapper>
            {status === true && (
              <S.Status>
                {compliments[Math.floor(Math.random() * compliments.length)]}
              </S.Status>
            )}
            <S.Image status={status} src={picture}></S.Image>
          </S.ImageWrapper>
          {meaning && status === true ? (
            <S.Word status={status}>{word}</S.Word>
          ) : (
            <S.Meaning>{meaning}</S.Meaning>
          )}
          <Input word={word} status={status} setStatus={setStatus} />
          {status === false && <Timer resetData={resetData} />}
        </>
      )}
    </>
  );
}

export default Home;
