import {createAction, handleActions} from "redux-actions";

const initialState = {};

const setLoader = createAction('SET_LOADER');
const clearLoader = createAction('CLEAR_LOADER');

const loadersReducer = handleActions({
    [setLoader]: (state, {payload: requestId}) => {
        return {
            ...state,
            [requestId]: true
        }
    },
    [clearLoader]: (state, {payload: requestId}) => {
        const newState = {};
        Object.keys(state).forEach((key) => {
            if (key !== requestId) {
                newState[key] = state[key];
            }
        });
        return newState;
    }
}, initialState);

const loaderSelector = (state, requestId) => state.loaders[requestId];

export {setLoader, clearLoader, loadersReducer, loaderSelector};
