import styled from "styled-components";

export const PhraseWrapper = styled.div`
  margin-top: 1vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  width: 50vh;

  text-align: center;

  border: 0.1vh solid #e0dbd1;
  border-radius: 1.5vh;

  div {
    height: 1vh;
  }
`;

export const Phrase = styled.p`
  font-size: 2.5vh;

  span {
    color: #ffa;
  }
`;

export const Desc = styled.p`
  font-size: 2vh;
`;

interface CopyableProps {
  alert: string;
}

export const Copyable = styled.p<CopyableProps>`
  position: relative;
  left: 50%;

  transform: translateX(-50%);

  width: max-content;

  font-size: 2.5vh;

  border-bottom: 0.25vh solid transparent;
  animation: flash 3s ease-in-out infinite;
  cursor: pointer;
  filter: brightness(125%) drop-shadow(0 0 0 #f2a154);
  transition: 0.25s filter, 0.25s border-bottom;

  :hover {
    text-decoration: none;

    animation: none;
    border-bottom: 0.25vh solid #ffa;
    filter: brightness(150%) drop-shadow(0 0 0.5vh #fff);

    ::after {
      position: absolute;
      background-color: #000;

      margin-top: 1vh;

      width: 100%;
      height: 2.5vh;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 2vh;
      text-decoration: none;

      animation: none;
      z-index: 1;
      filter: brightness(100%) drop-shadow(0 0 0 #f2a154);
      content: "${(props) => props.alert}";
    }
  }
  @keyframes flash {
    0% {
      filter: brightness(125%) drop-shadow(0 0 0 #f2a154);
    }
    50% {
      filter: brightness(125%) drop-shadow(0 0 0.5vh #f2a154);
    }
    100% {
      filter: brightness(125%) drop-shadow(0 0 0 #f2a154);
    }
  }
`;
