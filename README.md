## How to reduce tracking loaders and errors boilerplate

Look at usual approach of tracking loaders and errors. We should write similar code again and again for every resource.
Here redux-actions helper is used.

    const loadUsersRequest = createAction('LOAD_USERS_REQUEST');
    const loadUsersSuccess = createAction('LOAD_USERS_SUCCESS');
    const loadUsersFailure = createAction('LOAD_USERS_FAILURE');
    
    // thunk (async action)
    const loadUsers = () => (dispatch) => {
        dispatch(loadUsersRequest);
        return api.loadUsers()
            .then((users) => {
                dispatch(loadUsersSuccess(users));
            })
            .catch((err) => dispatch(loadUsersFailure(err.message)));
    };
    
    
    const initialState = {
        data: null,
        isLoading: false,
        error: null
    };
    
    const usersReducer = handleActions({
        [loadUsersRequest]: (state) => {
            return {
                ...state,
                isLoading: true
            };
        },
        [loadUsersSuccess]: (state, {payload: users}) => {
            return {
                ...state,
                isLoading: false,
                data: users
            };
        },
        [loadUsersFailure]: (state, {payload: error}) => {
            return {
                ...state,
                isLoading: false,
                error
            };
        },
    }, initialState);

This repo shows a way to reduce this boilerplate.
By this small app we load users when route to /users happens.

Errors and loaders are in the root state tree.

The main reusable util is:
src\shared\utils\track-loader-and-error.js

See this component:
src\modules\users\components\users.js
and go through its dependencies.
