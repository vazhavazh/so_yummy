export const selectRecipes = state => {
  console.log(state.simpleRecipe.simpleRecipe); // Проверка выбранных данных
  return state.simpleRecipe.simpleRecipe;
};
export const selectIsLoading = state => state.simpleRecipe.isLoading;
export const selectError = state => state.simpleRecipe.error;
export const selectIngredients = state => {
  const recipes = state.simpleRecipe.simpleRecipe;
  return recipes.length > 0 ? recipes[0].ingredients : [];
};
export const listOfFavorites = state => {
  const recipes = state.simpleRecipe.simpleRecipe;
  return recipes.length > 0 ? recipes[0].favorites : [];
};

export const selectInstructions = state => {
  const recipes = state.simpleRecipe.simpleRecipe;
  return recipes.length > 0 ? recipes[0].instructions : '';
};
