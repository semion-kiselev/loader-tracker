import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import {loadersReducer} from './shared/storage/loaders';
import {errorsReducer} from './shared/storage/errors';
import {usersReducer} from './modules/users/services/storage';

const rootReducer = combineReducers({
    loaders: loadersReducer,
    errors: errorsReducer,
    users: usersReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
