import * as api from './api';
import {setUsers} from './reducer';
import {trackLoaderAndError} from "../../../shared/utils/track-loader-and-error";
import {LOAD_USERS_REQUEST} from '../constants/requestIds';

export const loadUsers = () => (dispatch) => {
    const promise = api.loadUsers()
        .then((users) => {
            dispatch(setUsers(users));
        });
    return trackLoaderAndError(promise, LOAD_USERS_REQUEST, dispatch);
};
