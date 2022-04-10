import { useEffect } from "react";
import { tickTime } from "../../store/time/actions";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import store from "../../store/store";

type RootState = ReturnType<typeof store.getState>;
interface Props {
  resetData: any;
}

const Timer = ({ resetData }: Props) => {
  const timeCount = useSelector((state: RootState) => state.time);
  const dispatch = useDispatch();

  useEffect(() => {
    const Timer = setInterval(() => {
      dispatch(tickTime(resetData));
    }, 500);
    return () => {
      clearInterval(Timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.TimebarWrapper>
        <S.TimebarEmpty />
        <S.TimebarFull timeCount={timeCount / 2} />
      </S.TimebarWrapper>

      <S.Time>{Math.ceil(timeCount / 2)}</S.Time>
    </>
  );
};

export default Timer;
