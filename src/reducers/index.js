import { combineReducers } from 'redux';
import {
  mixReducer, foodReducer, wineReducer, dessertReducer, displayReducer,
} from './reducers';

const rootReducer = combineReducers({
  mixology: mixReducer,
  wines: wineReducer,
  food: foodReducer,
  desserts: dessertReducer,
  display: displayReducer,
});

export default rootReducer;
