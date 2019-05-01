const getState = (state) => state.pages.Home;

export const getFollowers = (state) => getState(state).followers;
export const getCount = (state) => getState(state).count;
export const getMaxCount = (state) => getState(state).maxCount;
export const getPage = (state) => getState(state).page;
export const getUsernameSuggestions = (state) => getState(state).usernameSuggestions;
export const getFilters = (state) => getState(state).filters;
