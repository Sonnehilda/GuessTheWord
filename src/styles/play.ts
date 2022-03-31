import styled from "styled-components";

interface StatusProps {
  status: boolean;
}

export const Button = styled.button`
  all: unset;
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  width: 30vh;
  height: 7.5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4vh;

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
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

export const Status = styled.div<StatusProps>`
  position: absolute;

  width: 50.5vh;
  color: #e0dbd1;

  filter: drop-shadow(0 0 0.5vh #000);
  ${(props) =>
    props.status === true
      ? `

  display: flex;
  justify-content: center;

  opacity: 0;

  @keyframes fade {
    0% {
      opacity: 0;
      margin-top: 25vh;
    }
    50% {
      opacity: 1;
      margin-top: 12.5vh;
    }
    100% {
      opacity: 0;
      margin-top: 0vh;
    }
  }
  animation: fade 3s ease-in-out;`
      : `
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  
  margin-top: 29.5vh;

  font-size: 4vh;
  
  border-bottom-left-radius: 1.5vh;
  border-bottom-right-radius: 1.5vh;`}

  z-index: 2;
`;

export const Image = styled.img<StatusProps>`
  position: relative;
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  width: 50vh;
  height: 35vh;

  border: 0.25vh solid #e0dbd1;
  border-radius: 1.5vh;

  object-fit: contain;

  transition: filter 0.5s;
  ${(props) =>
    props.status === true ? "filter: brightness(75%) blur(0.25vh)" : ""}
`;

export const InputWrapper = styled.div`
  width: max-content;
  height: max-content;
`;

export const Input = styled.input`
  all: unset;

  margin-left: 0.5vh;
  margin-right: 0.5vh;

  width: 4vh;
  height: 4vh;

  font-size: 3vh;
  color: "#e0dbd1";
  text-align: center;

  border-bottom: 0.1vh solid rgba(224, 219, 209, 1);
  box-sizing: border-box;

  transition: border-bottom 0.25s;

  :focus {
    border-bottom: 0.1vh solid rgba(224, 219, 209, 1);
  }
`;

export const Similarity = styled.div`
  font-size: 1.5vh;
  text-align: center;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

export const Time = styled.div`
  font-size: 1.5vh;
`;

export const TimebarWrapper = styled.div`
  width: 27.5vh;
  height: 1rem;

  display: inline-flex;
  justify-content: center;
`;

export const TimebarEmpty = styled.div`
  position: absolute;

  width: 27.5vh;
  height: 1.5vh;

  border: 0.1vh solid #e0dbd1;

  z-index: 0;
`;

interface TimebarFullProps {
  timeCount: number;
}

export const TimebarFull = styled.div<TimebarFullProps>`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.25);
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  width: ${(props) => `${props.timeCount / 3.637}vh`};
  height: 1.5vh;

  border: 0.1vh solid #e0dbd1;

  z-index: 1;
`;
