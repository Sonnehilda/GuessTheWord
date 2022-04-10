import styled from "styled-components";

export const Time = styled.div`
  font-size: 2.5vh;
`;

export const TimebarWrapper = styled.div`
  width: 27.5vh;

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
