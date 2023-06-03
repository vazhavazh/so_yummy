export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectRefreshing = state => state.auth.isRefreshing;

export const selectStatus = state => state.auth.status;

export const selectIsLoading = state => state.auth.isLoading;
