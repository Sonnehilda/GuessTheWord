import React, { useState } from "react";
import * as S from "../styles/meaning";

interface Definition {
  definition?: string;
}

interface MeaningProps {
  meaning: Definition[];
  word: string;
}

const Meaning = ({ word, meaning }: MeaningProps) => {
  const [openState, setOpenState] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const closeModal = (e: any) => {
    if (e.target.name === undefined) setOpenState(false);
  };

  const movePage = (num: number) => {
    if (page + num >= 0) {
      if (meaning[page + num] !== undefined) setPage(page + num);
    }
  };

  return (
    <>
      {openState === true ? (
        <S.Wrapper onClick={closeModal}>
          <S.Title>Meanings</S.Title>
          <S.Meaning>
            {meaning[page].definition?.replaceAll(word, "[ ]")}
          </S.Meaning>
          <S.PageWrapper>
            <S.Arrow onClick={() => movePage(-1)}>◀</S.Arrow>
            <S.PageDisplay>{page + 1}</S.PageDisplay>
            <S.Arrow onClick={() => movePage(1)}>▶</S.Arrow>
          </S.PageWrapper>
        </S.Wrapper>
      ) : (
        <S.Button onClick={() => setOpenState(!openState)}>
          See Meanings...
        </S.Button>
      )}
    </>
  );
};

export default Meaning;
