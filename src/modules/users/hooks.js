import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "./services/async-actions";
import {loaderSelector, errorSelector} from '../../shared/selectors';
import {usersSelector} from './services/selectors';
import {LOAD_USERS_REQUEST} from './constants/requestIds';

export const useUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isLoading = useSelector(state => loaderSelector(state, LOAD_USERS_REQUEST));
    const error = useSelector(state => errorSelector(state, LOAD_USERS_REQUEST));

    React.useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    return {users, isLoading, error};
}
