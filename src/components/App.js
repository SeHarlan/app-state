import React from 'react';
import Moods from '../containers/Moods';
import Timer from '../containers/Timer';
import { getTimer } from '../selectors/timerSelectors';
import { useSelector } from 'react-redux';


export default function App() {
  const timer = useSelector(getTimer);
  return (
    <>
      {timer && <Moods />}
      <Timer/>
    </>
  );
}

