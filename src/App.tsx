import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/app";
import * as P from "./pages/index";

import Logo from "./components/Logo";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Logo />
        <Routes>
          <Route path="/" element={<P.Home />} />
          <Route path="/play" element={<P.Play />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
