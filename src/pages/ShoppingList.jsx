import React, { useEffect } from 'react';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import Leaf from 'components/Leaf/Leaf';
const ShoppingList = () => {
  useEffect(() => {
    const element = document.getElementById('ahcnor1');
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <IngredientsShoppingList />
      <Leaf />
    </>
  );
};

export default ShoppingList;
