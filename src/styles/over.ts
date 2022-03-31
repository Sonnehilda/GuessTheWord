import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.875);

  width: 55vh;

  border-radius: 1.5vh;
  z-index: 3;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.div`
  margin: 0 auto;
  margin-top: 1vh;
  margin-bottom: 2vh;
  padding-bottom: 1vh;

  width: 85%;

  font-size: 6vh;

  display: flex;
  justify-content: center;

  border-bottom: 0.1vh solid #e0dbd1;
`;

export const SubTitle = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;

  font-size: 3vh;
  text-align: center;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;

  > span {
    color: #f5f9ad;

    filter: drop-shadow(0 0 0.5vh #fff);
  }
`;

export const Word = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;

  font-size: 6vh;
  color: #f5f9ad;
  text-align: center;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

export const Close = styled.button`
  all: unset;

  position: absolute;
  top: 0;
  right: 2vh;

  font-size: 4vh;
  font-family: sans-serif;

  cursor: pointer;

  :hover {
    filter: brightness(125%);
  }
`;
