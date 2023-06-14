export const selectFavoriteReceipts = state =>
  state.favoriteReceipt.favoriteReceipts;
export const selectTotalPages = state => state.favoriteReceipt.totalPages;
export const selectIsLoading = state => state.favoriteReceipt.isLoading;
export const selectError = state => state.favoriteReceipt.error;
