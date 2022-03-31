import React from "react";
import { onClick, onHover } from "../assets/sfxFunc";
import * as S from "../styles/footer";

const Footer = React.memo(function Footer() {
  return (
    <S.PreFooter>
      <S.Footer>
        <S.Copyright>
          <span>Powered by Pexels!</span>
          <S.Icon
            onMouseEnter={onHover}
            onMouseDown={onClick}
            href="http://pexels.com/"
            data-toggle="tooltip"
            title="Visit Pexels.com"
          />
        </S.Copyright>
        <S.Copyright>ⓒ 2022 __Rals All rights reserved.</S.Copyright>
      </S.Footer>
    </S.PreFooter>
  );
});

export default React.memo(Footer);
