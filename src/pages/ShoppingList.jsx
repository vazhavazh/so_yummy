import React from 'react';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { PageTitle } from 'components/PageTitle/PageTitle';
const ShoppingList = () => {
  return (
    <>
      <PageTitle />
      <IngredientsShoppingList />
    </>
  );
};

export default ShoppingList;
