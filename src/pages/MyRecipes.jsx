import React from 'react';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';
import Leaf from 'components/Leaf/Leaf';
// import { AddRecipeForm } from 'components/MyRecipesList/TestComponent';

const MyRecipes = () => {
  return (
    <>
      {/* <PageTitle /> */}
      <MyRecipesList />
      {/* <AddRecipeForm /> */}
      <Leaf />
    </>
  );
};

export default MyRecipes;
