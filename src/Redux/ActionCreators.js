import { actionTypes } from 'react-redux-form';
import * as ActionTypes from './ActionTypes.js';
export const addComment = (dishId, rating, author, comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : {
        dishId : dishId,
        rating : rating,
        author: author,
        comment: comment
    }
})