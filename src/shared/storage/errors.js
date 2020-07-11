import {createAction, handleActions} from "redux-actions";

const initialState = {};

const setError = createAction('SET_ERROR');
const clearError = createAction('CLEAR_ERROR');

const errorsReducer = handleActions({
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

const errorSelector = (state, requestId) => state.errors[requestId];

export {setError, clearError, errorsReducer, errorSelector}
