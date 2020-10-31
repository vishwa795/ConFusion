import { createStore, combineReducers } from 'redux';
import { Comments } from './comments.js';
import { Dishes } from './dishes.js';
import { Promotions } from './promotions.js';
import {Leaders} from './leaders';


export const ConfigureStore = () =>{
  const store = createStore(
    combineReducers({
      dishes : Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    })
  );
  return store;
}
