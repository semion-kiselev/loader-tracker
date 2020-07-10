import {createAction, handleActions} from "redux-actions";

const initialState = {};

export const setLoader = createAction('SET_LOADER');
export const clearLoader = createAction('CLEAR_LOADER');

export const loaderReducer = handleActions({
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
