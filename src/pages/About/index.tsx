import React, { useEffect, useState } from "react";
import { onClick, onHover } from "../../assets/sfxFunc";
import * as S from "./styles";

const Theme = require("../assets/bgms/theme.mp3");

function About() {
  const lang: string = localStorage.getItem("language") || "EN";

  const BGM = new Audio(Theme);

  const savedBgmVolume: number = localStorage.getItem("bgmvolume")
    ? parseInt(localStorage.getItem("bgmvolume") || "")
    : 75;
  const savedBgmToggle: string = localStorage.getItem("bgmtoggle") || "true";

  const [alert, setAlert] = useState<string>(
    lang === "KR" ? "클릭하여 복사합니다." : "Click Here to Copy!"
  );

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

  const onCopy = (e: any) => {
    const text = e.target.innerText;
    if (text.includes("rals")) {
      navigator.clipboard.writeText("rals#1031");
      setAlert(lang === "KR" ? "복사되었습니다!" : "Copied!");
    } else if (text.includes("winhave")) {
      navigator.clipboard.writeText("winhave@naver.com");
      setAlert(lang === "KR" ? "복사되었습니다!" : "Copied!");
    }
  };

  const onMouseLeave = () => {
    if (alert !== "Click Here to Copy!" && "클릭하여 복사합니다.")
      setAlert(lang === "KR" ? "클릭하여 복사합니다." : "Click Here to Copy!");
  };

  return (
    <>
      <S.PhraseWrapper>
        <S.Phrase>
          <span>{lang === "KR" ? "단어를 추측" : "Guess The Word"}</span>
          {lang === "KR"
            ? "은(는) 단어를 추측하는 게임입니다."
            : ", The English Word Guessing Game."}
        </S.Phrase>
        <div></div>
        <S.Phrase>
          <span>{lang === "KR" ? "단어를 추측" : "Guess The Word"}</span>
          {lang === "KR"
            ? "는 제시된 사진과 뜻을 보고"
            : " is a game in which players"}
        </S.Phrase>
        <S.Phrase>
          {lang === "KR"
            ? "단어를 추측하는 게임입니다."
            : "guess the word by getting hint from the"}
        </S.Phrase>
        <S.Phrase>
          {lang !== "KR" && "picture and the meaning of the word."}
        </S.Phrase>
        <div></div>
        <S.Desc>{lang === "KR" ? "사용된 음악" : "Music Used"}</S.Desc>
        <S.Desc>{lang === "KR" ? "좀비고등학교 - 광장" : "ZHS - Plaza"}</S.Desc>
        <S.Desc>
          {lang === "KR" ? "좀비고등학교 - 기숙사 복도" : "ZHS - Dormitory"}
        </S.Desc>
      </S.PhraseWrapper>
      <S.PhraseWrapper>
        <S.Phrase>{lang === "KR" ? "연락처" : "Contact"}</S.Phrase>
        <S.Copyable
          alert={alert}
          onClick={(e) => {
            onClick();
            onCopy(e);
          }}
          onMouseEnter={onHover}
          onMouseLeave={onMouseLeave}
        >
          {lang === "KR" ? "디스코드" : "Discord"} : rals#1031
        </S.Copyable>
        <S.Copyable
          alert={alert}
          onClick={(e) => {
            onClick();
            onCopy(e);
          }}
          onMouseEnter={onHover}
          onMouseLeave={onMouseLeave}
        >
          {lang === "KR" ? "이메일" : "E-Mail"} : winhave@naver.com
        </S.Copyable>
      </S.PhraseWrapper>
    </>
  );
}

export default About;
