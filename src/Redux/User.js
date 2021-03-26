import * as ActionTypes from './ActionTypes.js';

export const User = (state = {
    isLoggedIn:false,
    errmess:null,
    user:null,
    token:null
}, action) => {
    switch(action.type){
        case ActionTypes.USER_LOADING:
            return state;
        
        case ActionTypes.USER_LOGIN_FAILED:
            return{...state, isLoggedIn:false, errmess: action.payload, user:null, token:null }
        
        case ActionTypes.USER_LOGIN_SUCCESS:
            return{...state,isLoggedIn:true, errmess:null, user:action.payload.user, token:action.payload.token}

        default:
            return state;
    }
}