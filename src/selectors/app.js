const getState = (state) => state.app;

export const getDeviceInfo = (state) => getState(state).deviceInfo;
export const getIsDesktop = (state) => getState(state).deviceInfo.isDesktop;
export const getIsOpenLeftMenu = (state) => getState(state).isOpenLeftMenu;
