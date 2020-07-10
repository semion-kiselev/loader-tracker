import {createAction, handleActions} from "redux-actions";

const initialState = {};

export const setError = createAction('SET_ERROR');
export const clearError = createAction('CLEAR_ERROR');

export const errorsReducer = handleActions({
    [setError]: (state, {payload: {requestId, errorMessage}}) => {
        return {
            ...state,
            [requestId]: errorMessage
        }
    },
    [clearError]: (state, {payload: requestId}) => {
        const newState = {};
        Object.keys(state).forEach((key) => {
            if (key !== requestId) {
                newState[key] = state[key];
            }
        });
        return newState;
    }
}, initialState);
