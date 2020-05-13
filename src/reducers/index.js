import { combineReducers } from 'redux';
import moods from './moodsReducer';
import timer from './timerReducer';

export default combineReducers({ moods, timer });
