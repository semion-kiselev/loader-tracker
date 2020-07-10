import {createAction, handleActions} from "redux-actions";

const initialState = {};

export const setError = createAction('SET_ERROR');
export const clearLoader = createAction('CLEAR_ERROR');

export const errorReducer = handleActions({
    [setError]: (state, {payload: {requestId, errorMessage}}) => {
        return {
            ...state,
            [requestId]: errorMessage
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
