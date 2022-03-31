import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as S from "../styles/play";

import Input from "../components/Input";
import Timer from "../components/Timer";
import MeaningModal from "../components/MeaningModal";
import { compliments } from "../assets/fonts/compliments";
import OverModal from "../components/OverModal";
import { setScore } from "../store/score/actions";

const randomWords = require("random-words");

function Home() {
  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<object[]>([]);
  const [photograph, setPhotograph] = useState<string>("");
  const [photographer, setPhotographer] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [openState, setOpenState] = useState<boolean>(false);
  const [compliment, setCompliment] = useState<string>("");

  const wordRef = useRef<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === true) {
      const asyncFunc = async () => {
        initData();
      };
      asyncFunc().then(() => {
        setTimeout(() => {
          if (status === true) {
            setStatus(false);
            setCompliment(
              compliments[Math.floor(Math.random() * compliments.length)]
            );
          }
        }, 3000);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const initWord = () => {
    wordRef.current = randomWords().toUpperCase();
  };

  const initMeaning = async () => {
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordRef.current}`)
      .then((res) => {
        setMeaning(res.data[0].meanings[0].definitions);
      })
      .catch((err) => {
        setMeaning([]);
        console.error(err);
      });
  };

  const initPhoto = async () => {
    await axios
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
        setPhotograph(res.data.photos[0].src.medium);
        setPhotographer(res.data.photos[0].photographer);
      })
      .catch((err) => {
        setPhotograph("");
        setPhotographer("Picture Not Included");
        console.error(err);
      });
    setWord(wordRef.current);
  };

  const initData = () => {
    initWord();
    initPhoto();
    initMeaning();
  };

  const resetData = () => {
    setTimeout(() => {
      //wordRef.current = "";
      //setWord("");
      setMeaning([]);
      setPhotograph("");
      setPhotographer("");
      setStatus(false);
      setCompliment("");
      setOpenState(true);
    }, 0);
  };

  console.log(word);

  return (
    <>
      {openState === true && (
        <OverModal word={word} setOpenState={setOpenState} />
      )}
      {photograph ? (
        <>
          <S.ImageWrapper>
            <S.Status status={status}>
              {status === true ? compliment : photographer}
            </S.Status>
            <S.Image status={status} src={photograph}></S.Image>
          </S.ImageWrapper>
          {status === false && (
            <>
              <MeaningModal word={word} meaning={meaning} />
              <Input
                status={status}
                word={wordRef.current}
                setStatus={setStatus}
              />
              <Timer resetData={resetData} />
            </>
          )}
        </>
      ) : (
        <S.Button
          onClick={() => {
            dispatch(setScore(0));
            setCompliment(
              compliments[Math.floor(Math.random() * compliments.length)]
            );
            initData();
          }}
        >
          START
        </S.Button>
      )}
    </>
  );
}

export default Home;
