import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTimer } from '../selectors/timerSelectors';
import { start, decriment, restart } from '../actions/timerActions';
import style from './Timer.css';

const Timer = () => {
  const timer = useSelector(getTimer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(timer === 60) setInterval(() => dispatch(decriment()), 1000);
    if(timer < 1) {
      dispatch(restart());
      clearInterval(() => dispatch(decriment()), 1000);
    }
  }, [timer]);

  return (
    <section className={style.Timer}>
      {timer && <span>{timer} seconds left!</span>}
      {!timer && <button onClick={() => dispatch(start())}>Start</button>}
    </section>
  );
};

export default Timer;

