export const errorSelector = (state, requestId) => state.errors[requestId];
export const loaderSelector = (state, requestId) => state.loaders[requestId];
