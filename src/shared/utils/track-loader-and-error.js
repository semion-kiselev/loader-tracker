import {setError} from '../reducers/errors';
import {setLoader, clearLoader} from '../reducers/loaders';

export const trackLoaderAndError = (apiCallPromise, requestId, dispatch) => {
    dispatch(setLoader(requestId));
    return apiCallPromise
        .catch((error) => dispatch(setError(error)))
        .finally(() => dispatch(clearLoader(requestId)));
};
