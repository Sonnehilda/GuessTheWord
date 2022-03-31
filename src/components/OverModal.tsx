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
  const closeModal = () => {
    setOpenState(false);
  };

  const scoreCount = useSelector((state: RootState) => state.score);

  return (
    <>
      <S.Wrapper>
        <S.Title>Game Over!</S.Title>
        <S.TitleWrapper>
          <S.SubTitle>The word was...</S.SubTitle>
          <S.Word>{word}</S.Word>
          <S.SubTitle>
            You've guessed <span>{scoreCount}</span> word(s)!
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
