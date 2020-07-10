import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import {loaderReducer} from '../shared/reducers/loaders';
import {errorReducer} from '../shared/reducers/errors';
import {usersReducer} from '../modules/users/services/reducer';

const rootReducer = combineReducers({
    loaders: loaderReducer,
    errors: errorReducer,
    users: usersReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
