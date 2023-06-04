import React from 'react';
import data from 'api/fakeApi/fakeIngredientsDB.json';
import { ReactComponent as RemoveIcon } from 'assets/svg/shoppingListPage/x.svg';
import './IngredientsShoppingList.scss';

export const IngredientsShoppingList = () => {
  const ingredients = data;

  return (
    <>
      <div className="shopping-list-container">
        <div className="shopping-list-categories">
          <span className="shopping-list-categories--name">Product</span>
          <div className="name-wrapper">
            <span className="shopping-list-categories--name">Number</span>
            <span className="shopping-list-categories--name">Remove</span>
          </div>
        </div>
        <ul className="ingredient-list">
          {ingredients.map(ingredient => (
            <li className="ingredient-item" key={ingredient._id.$oid}>
              <div className="ingredient-wrapper">
                <div className="ingredient-img-wrapper">
                  <img
                    className="ingredient-img"
                    src={ingredient.thb}
                    alt={ingredient.ttl}
                  />
                </div>
                <h2 className="ingredient-name">{ingredient.ttl}</h2>
              </div>
             
               <div className='quantity-remove-wrapper'>
                  <div className="ingredient-quantity-wrapper">
                    {' '}
                    <span className="ingredient-quantity">100g</span>
                  </div>
                  <button className="remove-btnX x-btn" type="button">
                    <RemoveIcon className="remove-btnX--icon" />
                  </button>
               </div>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
