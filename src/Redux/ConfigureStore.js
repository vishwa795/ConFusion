import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Comments } from './comments.js';
import { Dishes } from './dishes.js';
import { Promotions } from './promotions.js';
import {Leaders} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedbackState } from './forms.js';


export const ConfigureStore = () =>{
  const store = createStore(
    combineReducers({
      dishes : Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback:InitialFeedbackState
      })
    }),
    applyMiddleware(thunk,logger)
  );
  return store;
}
