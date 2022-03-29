import React, { useState, useEffect, useRef } from "react";
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

  const wordRef = useRef<string>("");
  const meaningRef = useRef<string>("");
  const pictureRef = useRef<string>("");

  useEffect(() => {
    if (status === true) {
      setTimeout(() => {
        const asyncFunc = async () => {
          initData();
        };
        asyncFunc().then(() => {
          renderData();
          setStatus(false);
        });
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const initData = (e?: any) => {
    if (e) e.target.disabled = true;
    wordRef.current = randomWords().toLowerCase();

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordRef.current}`)
      .then((res) => {
        meaningRef.current = res.data[0].meanings[0].definitions[0].definition;
      })
      .catch((err) => {
        console.log(err);
        if (e) e.target.disabled = false;
        return;
      });

    axios
      .get(
        `https://api.pexels.com/v1/search?query=${wordRef.current}&per_page=1`,
        {
          headers: {
            Authorization:
              "563492ad6f9170000100000166d41ae3c98341ae947ae0ad4b543bbc",
          },
        }
      )
      .then((res) => {
        pictureRef.current = res.data.photos[0].src.medium;
      })
      .catch((err) => {
        console.log(err);
        if (e) e.target.disabled = false;
        return;
      });
  };

  const renderData = () => {
    if (wordRef.current && meaningRef.current && pictureRef.current) {
      setWord(wordRef.current);
      setMeaning(meaningRef.current);
      setPicture(pictureRef.current);
    }
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
          onClick={() => {
            const asyncFunc = async () => {
              initData();
            };
            asyncFunc().then(renderData);
          }}
        >
          START
        </S.Button>
      )}
      {picture && meaning && (
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
            <S.Word>{word}</S.Word>
          ) : (
            <S.Meaning>{meaning}</S.Meaning>
          )}
          {status === false && (
            <>
              <Input word={word} status={status} setStatus={setStatus} />
              <Timer resetData={resetData} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
