import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  color: #e0dbd1;
  font-size: 8vh;
  text-decoration: none;

  cursor: pointer;
  transition: filter 0.25s;

  :hover {
    filter: drop-shadow(0 0 0.5vh #fff);
  }

  @media only screen and (max-width: 500px) {
    font-size: 5vh;
  }
`;