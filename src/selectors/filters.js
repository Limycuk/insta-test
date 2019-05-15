const getState = (state) => state.filters;

export const getFilters = (state) => getState(state);
export const getDate = (state) => getState(state).dates;
export const getType = (state) => getState(state).type;
