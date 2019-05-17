const getState = (state) => state.modules.dataFilters;

export const getFilters = (state) => getState(state);
export const getDate = (state) => getState(state).dates;
export const getType = (state) => getState(state).type;
