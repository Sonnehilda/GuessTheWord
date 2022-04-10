import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
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
