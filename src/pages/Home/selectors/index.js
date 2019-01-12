const getState = (state) => state.pages.Home;

export const getData = (state) => getState(state).data;
export const getCount = (state) => getState(state).count;
export const getPage = (state) => getState(state).page;
