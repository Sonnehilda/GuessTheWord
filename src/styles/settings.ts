import styled from "styled-components";

export const TextWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  input:checked + label span {
    left: 3vh;
  }
  label {
    filter: opacity(75%);
  }
  label:hover {
    filter: brightness(150%) opacity(100%);
  }
`;

export const Text = styled.div`
  margin-bottom: 1.25vh;

  font-size: 2.5vh;
  font-weight: 100;
  color: #ccc;
`;

export const Label = styled.label`
  background-color: rgba(255, 255, 255, 0.25);
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  margin-bottom: 1vh;
  margin-left: 1vh;

  width: 5vh;
  height: 2vh;

  display: inline-block;

  border: 0.1vh solid #e0dbd1;
  border-radius: 1.5vh;
  transition: left 0.2s;
  cursor: pointer;
`;

export const Button = styled.span`
  position: absolute;
  top: 0.025vh;
  left: 0.25vh;

  background-color: #fff;

  width: 1.75vh;
  height: 1.75vh;

  display: inline-block;

  border: 0.1vh solid #e0dbd1;
  border-radius: 50%;
  transition: left 0.2s;
`;

export const Checkbox = styled.input`
  position: absolute;
  /* hidden */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Wrapper = styled.div`
  width: 35vh;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 0.1vh solid #e0dbd1;
  border-radius: 1.5vh;
`;

export const Value = styled.div`
  margin-top: 1.5vh;
  font-size: 2.5vh;
  font-weight: 100;
  color: #ccc;
`;

export const Range = styled.input`
  all: unset;

  background-color: rgba(255, 255, 255, 0.25);
  background-image: repeating-linear-gradient(
    45deg,
    #e0dbd1,
    transparent 0.1vh,
    transparent 0,
    transparent 0.5vh
  );

  width: 25vh;
  height: 1.5vh;

  border: 0.1vh solid #e0dbd1;
  border-radius: 1.5vh;
  filter: opacity(75%);

  ::-webkit-slider-thumb {
    appearance: none;

    background-color: #fff;

    width: 3vh;
    height: 3vh;

    border: 0.1vh solid #e0dbd1;
    border-radius: 50%;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    background-color: #fff;

    width: 3vh;
    height: 3vh;

    border: 0.1vh solid #e0dbd1;
    border-radius: 50%;
    cursor: pointer;
  }

  :hover {
    filter: brightness(150%) opacity(100%);
  }
`;

export const Alert = styled.div`
  margin-top: 1.5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2vh;
  font-weight: 100;
  color: #ccc;
`;

export const Lang = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url("https://d29fhpw069ctt2.cloudfront.net/icon/image/39091/preview.png");
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 21.5vh 0.7vh;
  background-size: 2vh 2vh;

  padding-left: 1vh;

  width: 25vh;
  height: 4vh;

  font-size: 1.5vh;
  font-weight: 100;
  color: #fff;

  border: 0.25vh solid #ccc;
  border-radius: 1.5vh;
  filter: opacity(75%);

  option {
    color: #000;
  }
  ::-ms-expand {
    display: none;
  }
`;
