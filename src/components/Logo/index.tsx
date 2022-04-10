import { onClick, onHover } from "../../assets/sfxFunc";
import * as S from "./styles";

function Logo() {
  const lang: string = localStorage.getItem("language") || "EN";

  return (
    <S.Logo onMouseEnter={onHover} onClick={onClick} to="/">
      {lang === "KR" ? "단어를 추측!" : "Guess The Word!"}
    </S.Logo>
  );
}

export default Logo;
