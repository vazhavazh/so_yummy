import React from 'react';
import data from 'api/fakeApi/fakeIngredientsDB.json';
import { ReactComponent as RemoveIcon } from 'assets/svg/shoppingListPage/x.svg';
import './IngredientsShoppingList.scss';

export const IngredientsShoppingList = () => {
  const ingredients = data;
  console.log(data);
  return (
    <>
      <div className="shopping-list-categories"></div>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => (
          <li className="ingredient-item" key={ingredient._id.$oid}>
            <img
              className="ingredient-img"
              src={ingredient.thb}
              alt={ingredient.ttl}
            />
            <h2 className="ingredient-name">{ingredient.ttl}</h2>
            <div className="ingredient-quantity-wrapper">
              {' '}
              <span className="ingredient-quantity"></span>
            </div>
            <button className="remove-btnX" type="button">
              <RemoveIcon className="remove-btnX--icon" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
