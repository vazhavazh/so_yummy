export const getIsAuth = state => Boolean(state.auth.token);
export const getUserName = state => state.auth.user;
export const getToken = state => state.auth.token;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getIsEditModalOpen = state => state.auth.isEditModalOpen;
export const selectUserId = state => state.auth.user._id