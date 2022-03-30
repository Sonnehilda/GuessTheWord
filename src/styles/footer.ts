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
  font-size: 1.5vh;

  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;

  > span {
    margin-right: 1vh;
  }
`;

export const Icon = styled.img`
  width: 2.5vh;
  height: 2.5vh;
  margin-left: 1vh;

  border-radius: 1.5vh;
  border: 0.1vh solid #e0dbd1;
`;
