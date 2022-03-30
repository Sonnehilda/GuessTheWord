import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  margin-top: 2vh;

  width: 20vh;
  height: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2vh;

  border: 0.1vh solid #e0dbd1;
  border-radius: 1.5vh;
  box-sizing: border-box;

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    background-image: repeating-linear-gradient(
      45deg,
      #e0dbd1,
      transparent 0.1vh,
      transparent 0,
      transparent 0.3vh
    );

    filter: drop-shadow(0 0 0.5vh #fff);

    @keyframes pattern {
      from {
        font-style: normal;
      }
      to {
        font-style: oblique 20deg;
      }
    }
    animation: pattern 0.5s linear infinite;
  }
  :disabled {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.875);

  width: 55vh;
  height: 80vh;

  border-radius: 1.5vh;
  z-index: 3;
`;

export const Meaning = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;

  font-size: 2.5vh;
  text-align: center;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

export const Title = styled.div`
  margin: 0 auto;
  margin-bottom: 2vh;

  width: 85%;

  font-size: 5.5vh;

  display: flex;
  justify-content: center;

  border-bottom: 0.1vh solid #e0dbd1;
`;

export const PageWrapper = styled.div`
  position: absolute;
  bottom: 0vh;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageDisplay = styled.div`
  position: absolute;
  font-size: 2.5vh;
`;
export const Arrow = styled.button`
  all: unset;
  font-size: 4vh;

  :hover {
    filter: brightness(125%);
  }
  :nth-child(1) {
    margin-right: 10vh;
  }
`;
