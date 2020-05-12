export const getMoodsState = state => state.moods;

export const getFace = (state) => {
  const { coffees, naps, studies, snacks } = getMoodsState(state);

  const isTired = coffees < 1 && naps < 1;
  const isHyper = coffees > 3;
  const isEducated = studies > 2;
  const isHungry = snacks < 1;
  const isBalanced = (coffees === naps && studies === snacks && snacks === naps && coffees > 0);

  if(isBalanced) return '😀';
  if(isTired && isHungry) return '🤬';
  if(isHyper && isHungry) return '🤮';
  if(isTired) return '😴';
  if(isHyper) return '🙀';
  if(isEducated) return '🤯';
  if(isHungry) return '😡';

  return '🤷';
};
