import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getMoodsState, getFace } from '../selectors/moodsSelectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodsActions';

const Moods = () => {
  const { coffees, snacks, naps, studies } = useSelector(getMoodsState);
  const face = useSelector(getFace);

  const dispatch = useDispatch();

  return (
    <>
      <Controls>
        <button onClick={dispatch(drinkCoffee)}>coffee - {coffees}</button>
        <button onClick={dispatch(eatSnack)}>snacks - {snacks}</button>
        <button onClick={dispatch(takeNap)}>naps - {naps}</button>
        <button onClick={dispatch(study)}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
