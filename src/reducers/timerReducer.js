import { START, DECRIMENT, RESTART } from '../actions/timerActions';

export default function reducer(state = null, { type }) {
  switch(type) {
    case START:
      return 60;
    case DECRIMENT:
      return state - 1;
    case RESTART:
      return null;
    default:
      return state;
  }
}
