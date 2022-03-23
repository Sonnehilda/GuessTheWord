import React from "react";
import * as S from "../styles/home";

function Home() {
  return (
    <>
      <S.Button to="/play">PLAY</S.Button>
      <S.Button to="/">SETTINGS</S.Button>
      <S.Button to="/">ABOUT</S.Button>
    </>
  );
}

export default Home;
