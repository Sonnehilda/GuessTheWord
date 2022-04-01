import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/app";
import * as P from "./pages/index";

import Logo from "./components/Logo";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Logo />
        <Routes>
          <Route path="/" element={<P.Home />} />
          <Route path="/play" element={<P.Play />} />
          <Route path="/settings" element={<P.Settings />} />
          <Route path="/about" element={<P.About />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
