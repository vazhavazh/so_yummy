export const selectCategories = state => state.transactions.categories;
export const selectMonth = state => state.transactions.month;
export const selectYear = state => state.transactions.year;

export const sortByDateDescending = state => {
  const array = [...state.transactions.transactions];
  array.sort((a, b) => {
    if (a.transactionDate < b.transactionDate) return -1;
    if (a.transactionDate > b.transactionDate) return 1;
    return 0;
  });
  return array.reverse();
};

export const selectAllCategories = state =>
  state.transactions.categoriesSummary.categories;
export const selectIncomeSummary = state =>
  state.transactions.categoriesSummary.incomeSummary;
export const selectExpenseSummary = state =>
  state.transactions.categoriesSummary.expenseSummary;

export const selectIsLoading = state => state.transactions.isLoading;
