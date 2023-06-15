import React from 'react';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Leaf from 'components/Leaf/Leaf';
const ShoppingList = () => {
  return (
    <>
      <PageTitle />
      <IngredientsShoppingList />
      <Leaf/>
    </>
  );
};

export default ShoppingList;
