import React, { useEffect } from 'react';
import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Leaf from 'components/Leaf/Leaf';
// import { AddRecipeForm } from 'components/MyRecipesList/TestComponent';

const MyRecipes = () => {
  useEffect(() => {
    const element = document.getElementById('ahcnor1');
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <PageTitle />
      <MyRecipesList />
      {/* <AddRecipeForm /> */}
      <Leaf />
    </>
  );
};

export default MyRecipes;
