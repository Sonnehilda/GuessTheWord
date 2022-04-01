import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "../styles/over";

import store from "../store/store";
import { onClick, onHover } from "../assets/sfxFunc";

type setBooleanState = React.Dispatch<React.SetStateAction<boolean>>;
type RootState = ReturnType<typeof store.getState>;

interface OverProps {
  word: string;
  setOpenState: setBooleanState;
}

const OverModal = ({ word, setOpenState }: OverProps) => {
  const lang: string = localStorage.getItem("language") || "EN";

  const closeModal = () => {
    setOpenState(false);
  };

  const scoreCount = useSelector((state: RootState) => state.score);

  return (
    <>
      <S.Wrapper>
        <S.Title>
          {lang === "KR" ? "게임이 종료되었습니다!" : "Game Over!"}
        </S.Title>
        <S.TitleWrapper>
          <S.SubTitle>
            {lang === "KR" ? "방금 단어는..." : "The word was..."}
          </S.SubTitle>
          <S.Word>{word}</S.Word>
          <S.SubTitle>
            {lang === "KR" ? "당신은 " : "You've guessed "}
            <span>{scoreCount}</span>{" "}
            {lang === "KR" ? " 개의 단어를 추측했습니다!" : "word(s)!"}
          </S.SubTitle>
        </S.TitleWrapper>
        <S.Close
          onMouseEnter={onHover}
          onClick={() => {
            onClick();
            closeModal();
          }}
        >
          ×
        </S.Close>
      </S.Wrapper>
    </>
  );
};

export default OverModal;
