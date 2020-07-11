import {setError} from '../storage/errors';
import {setLoader, clearLoader} from '../storage/loaders';

export const trackLoaderAndError = (apiCallPromise, requestId, dispatch) => {
    dispatch(setLoader(requestId));
    return apiCallPromise
        .catch((error) => dispatch(setError(error)))
        .finally(() => dispatch(clearLoader(requestId)));
};
