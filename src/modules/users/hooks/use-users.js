import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers, setUsers, usersSelector} from "../services/storage";
import {loaderSelector} from '../../../shared/storage/loaders';
import {clearError, errorSelector} from "../../../shared/storage/errors";
import {LOAD_USERS_REQUEST} from '../constants/requestIds';

export const useUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isLoading = useSelector(state => loaderSelector(state, LOAD_USERS_REQUEST));
    const error = useSelector(state => errorSelector(state, LOAD_USERS_REQUEST));

    React.useEffect(() => {
        dispatch(loadUsers());
        return () => {
            dispatch(clearError(LOAD_USERS_REQUEST));
            dispatch(setUsers(null));
        }
    }, [dispatch]);

    return {users, isLoading, error};
};
