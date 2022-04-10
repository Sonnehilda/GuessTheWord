import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/index";

import Logo from "./components/Logo/index";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";

import Home from "./pages/Home/index";
import Play from "./pages/Play/index";
import Settings from "./pages/Settings/index";
import About from "./pages/About/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
