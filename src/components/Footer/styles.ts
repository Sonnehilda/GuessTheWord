import styled from "styled-components";

export const PreFooter = styled.footer`
  position: absolute;
  bottom: 5vh;

  width: 100%;
  height: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

export const Footer = styled.footer`
  margin: 0 auto;

  width: 65vh;
  height: 5vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > div {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Copyright = styled.div`
  font-size: 2.5vh;

  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;

  > span {
    margin-right: 0.75vh;
  }
`;

export const Icon = styled.a`
  background-image: url("https://static.wixstatic.com/media/0231aa_31450e4c390541a69473c0c5747c7c9a~mv2.png/v1/fill/w_280,h_280,al_c,usm_0.66_1.00_0.01,enc_auto/pexels.png");
  background-size: 2.5vh 2.5vh;

  width: 2.5vh;
  height: 2.5vh;
  margin-left: 0.75vh;

  border-radius: 1.5vh;
  border: 0.1vh solid #e0dbd1;

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: brightness(125%);
  }
`;
