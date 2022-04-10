import React from "react";
import { onClick, onHover } from "../../assets/sfxFunc";
import * as S from "./styles";

const Footer = React.memo(function Footer() {
  const lang: string = localStorage.getItem("language") || "EN";

  return (
    <S.PreFooter>
      <S.Footer>
        <S.Copyright>
          <span>
            {lang === "KR"
              ? "Pexels 의 지원을 받았습니다!"
              : "Powered by Pexels!"}
          </span>
          <S.Icon
            onMouseEnter={onHover}
            onMouseDown={onClick}
            href="http://pexels.com/"
            data-toggle="tooltip"
            title="http://pexels.com/"
          />
        </S.Copyright>
        <S.Copyright>ⓒ 2022 __Rals All rights reserved.</S.Copyright>
      </S.Footer>
    </S.PreFooter>
  );
});

export default React.memo(Footer);
