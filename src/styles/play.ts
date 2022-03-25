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

  width: 30vh;
  height: 7.5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3vh;

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

export const Image = styled.img`
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  width: 50vh;
  max-height: 35vh;

  border: 0.25vh solid #e0dbd1;
  border-radius: 1.5vh;

  object-fit: contain;
`;

export const Meaning = styled.div`
  padding-left: 1vh;
  padding-right: 1vh;

  font-size: 2.25vh;
  text-align: center;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

export const Word = styled.div`
  font-size: 4.5vh;
  text-align: center;
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
`;

interface InputProps {
  status: boolean;
}

export const InputWrapper = styled.div``;

export const Input = styled.input<InputProps>`
  all: unset;

  margin-left: 0.5vh;
  margin-right: 0.5vh;

  width: 4vh;

  font-size: 3vh;
  color: ${(props) => (props.status === true ? "#bcdf8a" : "#e0dbd1")};
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
