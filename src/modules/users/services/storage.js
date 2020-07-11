import {createAction, handleActions} from 'redux-actions';
import * as api from './api';
import {trackLoaderAndError} from '../../../shared/utils/track-loader-and-error';
import {LOAD_USERS_REQUEST} from '../constants/requestIds';

const setUsers = createAction('SET_USERS');

const loadUsers = () => (dispatch) => {
    const promise = api.loadUsers()
        .then((users) => {
            dispatch(setUsers(users));
        });
    return trackLoaderAndError(promise, LOAD_USERS_REQUEST, dispatch);
};


const initialState = null;

const usersReducer = handleActions({
    [setUsers]: (state, {payload: users}) => {
        return users;
    }
}, initialState);

const usersSelector = (state) => state.users;

export {setUsers, loadUsers, usersReducer, usersSelector};

