import React, { useEffect } from "react";
import { onClick, onHover } from "../assets/sfxFunc";
import * as S from "../styles/home";

const Theme = require("../assets/bgms/theme.mp3");

function Home() {
  const lang: string = localStorage.getItem("language") || "EN";
  console.log(lang);

  const BGM = new Audio(Theme);

  const savedBgmVolume: number = localStorage.getItem("bgmvolume")
    ? parseInt(localStorage.getItem("bgmvolume") || "")
    : 75;
  const savedBgmToggle: string = localStorage.getItem("bgmtoggle") || "true";

  useEffect(() => {
    BGM.loop = true;
    BGM.volume = savedBgmVolume / 100;

    onFocus();
    if (savedBgmToggle === "true") {
      BGM.play();
      window.addEventListener("focus", onFocus);
      window.addEventListener("blur", onBlur);
      window.addEventListener("mousemove", onFirstJoin);
    }

    return () => {
      onBlur();
      BGM.pause();
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("mousemove", onFirstJoin);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      <S.Button onMouseEnter={onHover} onClick={onClick} to="/play">
        {lang === "KR" ? "플레이" : "PLAY"}
      </S.Button>
      <S.Button onMouseEnter={onHover} onClick={onClick} to="/settings">
        {lang === "KR" ? "설정" : "SETTINGS"}
      </S.Button>
      <S.Button onMouseEnter={onHover} onClick={onClick} to="/about">
        {lang === "KR" ? "소개" : "ABOUT"}
      </S.Button>
    </>
  );
}

export default Home;
