const getState = (state) => state.app

export const getDeviceInfo = (state) => getState(state).deviceInfo
export const getIsDesktop = (state) => getState(state).deviceInfo.isDesktop
