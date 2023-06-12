export const selectRecipes = state => state.simpleRecipe.simpleRecipe;
export const selectIsLoading = state => state.simpleRecipe.isLoading;
export const selectError = state => state.simpleRecipe.error;
export const selectIngredients = state => {
  const recipes = state.simpleRecipe.simpleRecipe;
  return recipes.length > 0 ? recipes[0].ingredients : [];
};
