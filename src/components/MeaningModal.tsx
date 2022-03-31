import React, { useState } from "react";
import { onClick, onHover } from "../assets/sfxFunc";
import * as S from "../styles/meaning";

interface Definition {
  definition?: string;
}

interface MeaningProps {
  meaning: Definition[];
  word: string;
}

const MeaningModal = ({ word, meaning }: MeaningProps) => {
  const lang: string = localStorage.getItem("language") || "EN";

  const [openState, setOpenState] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const closeModal = (e: any) => {
    if (e.target.name === undefined) setOpenState(false);
  };

  const movePage = (num: number) => {
    if (page + num >= 0) {
      if (meaning && meaning[page] && meaning[page + num] !== undefined)
        setPage(page + num);
    }
  };

  return (
    <>
      {openState === true && (
        <S.Wrapper onClick={closeModal}>
          <S.Title>{lang === "KR" ? "뜻" : "Meanings"}</S.Title>
          <S.Meaning>
            {meaning &&
              meaning[page] &&
              meaning[page].definition?.replaceAll(word.toLowerCase(), "[ ]")}
          </S.Meaning>
          <S.PageWrapper>
            <S.Arrow
              onMouseEnter={onHover}
              onClick={() => {
                onClick();
                movePage(-1);
              }}
            >
              ◀
            </S.Arrow>
            <S.PageDisplay>{page + 1}</S.PageDisplay>
            <S.Arrow
              onMouseEnter={onHover}
              onClick={() => {
                onClick();
                movePage(1);
              }}
            >
              ▶
            </S.Arrow>
          </S.PageWrapper>
        </S.Wrapper>
      )}
      <S.Button
        onMouseEnter={onHover}
        disabled={openState === true ? true : false}
        onClick={() => {
          onClick();
          setOpenState(!openState);
        }}
      >
        {lang === "KR" ? "뜻 보기" : "See Meanings..."}
      </S.Button>
    </>
  );
};

export default MeaningModal;
