import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchAllShoppingIngredients,
  fetchDeleteShoppingIngredient,
} from 'redux/shoppingIngrs/shopThunks';
import {
  selectIsLoading,
  selectShoppingListIngredients,
} from 'redux/shoppingIngrs/shopSelectors';
import { ReactComponent as RemoveIcon } from 'assets/svg/shoppingListPage/x.svg';

import './IngredientsShoppingList.scss';
import Loader from 'components/Loader/Loader';
import img from 'assets/image/searchPage/asdd.png';
import scss from 'components/Search/SearchBar/SearchBar.module.scss';

export const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectShoppingListIngredients);
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteIngredient = async ingredient => {
    try {
      dispatch(fetchDeleteShoppingIngredient(ingredient));
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(fetchAllShoppingIngredients());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!ingredients || ingredients.length === 0) {
    return (
      <div className={scss.searchLookingWrapper}>
        <img src={img} alt="images" />
        <p className="emptyName">Your shopping list still empty...</p>
      </div>
    );
  }

  return (
    <>
     <div className='flexWrapper'>
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
              <li className="ingredient-item" key={ingredient._id}>
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
  
                <div className="quantity-remove-wrapper">
                  <div className="ingredient-quantity-wrapper">
                    {' '}
                    <span className="ingredient-quantity">
                      {ingredient.measure}
                    </span>
                  </div>
                  <button
                    className="remove-btnX x-btn"
                    type="button"
                    onClick={() => {
                      handleDeleteIngredient(ingredient);
                    }}
                  >
                    <RemoveIcon className="remove-btnX--icon" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
     </div>
    </>
  );
};
