import React from "react";
import * as S from "../styles/footer";

const Footer = React.memo(function Footer() {
  return (
    <S.PreFooter>
      <S.Footer>
        <S.Copyright>
          <span>Powered by Pexels!</span>
          <S.Icon src="https://static.wixstatic.com/media/0231aa_31450e4c390541a69473c0c5747c7c9a~mv2.png/v1/fill/w_280,h_280,al_c,usm_0.66_1.00_0.01,enc_auto/pexels.png"></S.Icon>
        </S.Copyright>
        <S.Copyright>ⓒ 2022 __Rals All rights reserved.</S.Copyright>
      </S.Footer>
    </S.PreFooter>
  );
});

export default React.memo(Footer);
