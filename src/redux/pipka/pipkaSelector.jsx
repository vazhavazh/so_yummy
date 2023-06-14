// 

 const selectMyRecipes = state => {
    const recipe = state.pipkaReducer.pipka;
    return recipe ? recipe : null
}
export const selectIsLoading = state => state.pipka.isLoading;
export const selectError = state => state.pipka.error;
// export const selectMyInstructions = state => {
//   const recipes = state.pipka10.pipka10;

//   return recipes.length > 0 ? recipes[0].instructions : '';
// };
// export const selectMyImg = state => {
//   const recipes = state.pipka10.pipka10;
//   return recipes.length > 0 ? recipes[0].preview : '';
// };
// export const selectMyIngredients = state => {
//   const recipes = state.pipka10.pipka10;

// };

export default selectMyRecipes;