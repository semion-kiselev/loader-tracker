import {createAction, handleActions} from 'redux-actions';

export const setUsers = createAction('SET_USERS');

const initialState = null;

export const usersReducer = handleActions({
   [setUsers]: (state, {payload: users}) => {
       return users;
   }
}, initialState);

