import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as S from "../styles/play";

import Input from "../components/Input";
import Timer from "../components/Timer";
import MeaningModal from "../components/MeaningModal";
import { compliments } from "../assets/compliments";
import OverModal from "../components/OverModal";
import { setScore } from "../store/score/actions";
import { onClick, onHover } from "../assets/sfxFunc";

const randomWords = require("random-words");

const Game = require("../assets/bgms/game.mp3");
const Correct = require("../assets/sfxes/correct.mp3");
const Over = require("../assets/sfxes/over.mp3");

function Play() {
  const BGM = new Audio(Game);
  const CorrectSFX = new Audio(Correct);
  const GameOverSFX = new Audio(Over);

  const savedBgmVolume: number = localStorage.getItem("bgmvolume")
    ? parseInt(localStorage.getItem("bgmvolume") || "")
    : 75;
  const savedSfxVolume: number = localStorage.getItem("sfxvolume")
    ? parseInt(localStorage.getItem("sfxvolume") || "")
    : 75;
  const savedBgmToggle: string = localStorage.getItem("bgmtoggle") || "true";
  const savedSfxToggle: string = localStorage.getItem("sfxtoggle") || "true";

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
    BGM.loop = true;
    BGM.volume = savedBgmVolume / 100;

    onFocus();
    if (savedBgmToggle === "true") {
      BGM.play();
      window.addEventListener("focus", onFocus);
      window.addEventListener("blur", onBlur);
      window.addEventListener("mousemove", onFirstJoin);
      window.addEventListener("keydown", onEsc);

      return () => {
        onBlur();
        BGM.pause();
        window.removeEventListener("keydown", onEsc);
        window.removeEventListener("focus", onFocus);
        window.removeEventListener("blur", onBlur);
        window.removeEventListener("mousemove", onFirstJoin);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEsc = (e: any) => {
    if (e.key === "Escape") {
      setOpenState(false);
    }
  };

  const onFocus = () => {
    BGM.volume = savedBgmVolume / 100;
    if (savedBgmToggle === "true" && BGM.paused === true) BGM.play();
  };

  const onBlur = () => {
    BGM.volume = 0;
  };

  const onFirstJoin = () => {
    window.removeEventListener("mousemove", onFirstJoin);
    if (savedBgmToggle === "true" && BGM.paused) {
      BGM.volume = savedBgmVolume / 100;
      BGM.play();
    }
  };

  useEffect(() => {
    if (status === true) {
      if (savedSfxToggle === "true") {
        CorrectSFX.pause();
        CorrectSFX.volume = savedSfxVolume / 100;
        CorrectSFX.currentTime = 0;
        CorrectSFX.play();
      }

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
    if (savedSfxToggle === "true") {
      GameOverSFX.pause();
      GameOverSFX.volume = savedSfxVolume / 100;
      GameOverSFX.currentTime = 0;
      GameOverSFX.play();
    }

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
          disabled={openState === true ? true : false}
          onMouseEnter={onHover}
          onClick={() => {
            onClick();
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

export default Play;
