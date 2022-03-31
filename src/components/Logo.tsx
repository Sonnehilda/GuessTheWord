import React from "react";
import { onClick, onHover } from "../assets/sfxFunc";
import * as S from "../styles/home";

function Logo() {
  return (
    <S.Logo onMouseEnter={onHover} onClick={onClick} to="/">
      Guess The Word!
    </S.Logo>
  );
}

export default Logo;
