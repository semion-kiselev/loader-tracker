import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import {loadersReducer} from './shared/reducers/loaders';
import {errorsReducer} from './shared/reducers/errors';
import {usersReducer} from './modules/users/services/reducer';

const rootReducer = combineReducers({
    loaders: loadersReducer,
    errors: errorsReducer,
    users: usersReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
