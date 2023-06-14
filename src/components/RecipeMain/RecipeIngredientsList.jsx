import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import {
  fetchPostShoppingIngredient,
  fetchDeleteShoppingIngredient,
  fetchAllShoppingIngredients,
} from 'redux/shoppingIngrs/shopThunks';
import style from './RecipeMain.module.scss';

export const RecipeIngredientsList = ({ ingredients }) => {
 

  const dispatch = useDispatch();
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  useEffect(() => {
    dispatch(fetchAllShoppingIngredients());
  }, [dispatch]);
  const handleCheckboxChange = (ingredient, isChecked) => {
    if (isChecked) {
      setCheckedIngredients(prevCheckedIngredients => [
        ...prevCheckedIngredients,
        ingredient,
      ]);
      dispatch(fetchPostShoppingIngredient(ingredient));
    } else {
      setCheckedIngredients(prevCheckedIngredients =>
        prevCheckedIngredients.filter(ing => ing._id !== ingredient._id)
      );
      dispatch(fetchDeleteShoppingIngredient(ingredient));
    }
  };

  return (
    <>
      <div className={style.list}>
        <div className={style.list__head}>
          <p className={style.list__first}>Ingredients</p>

          <div className={style.list__second}>
            <p>Number</p>
            <p>Add to list</p>
          </div>
        </div>

        <ul className={style.ingred__list}>
          {ingredients.map(ingredient => {
            
            const isChecked = checkedIngredients.some(
              ing => ing._id === ingredient._id
            );
            return (
              <li className={style.ingred__item} key={ingredient._id}>
                <div className={style.ingred__wrapper}>
                  <img
                    className={style.ingred__img}
                    src={ingredient.thb}
                    alt={ingredient.ttl}
                  />
                  <h2 className={style.ingred__name}>{ingredient.ttl}</h2>
                </div>

                <div className={style.ingred__wrapper_second}>
                  <p className={style.ingred__quantity}>{ingredient.measure}</p>
                  <label className={style.checkbox__wrapper}>
                    <input
                      className={style.ingred__checkbox}
                      type="checkbox"
                      checked={isChecked}
                      onChange={event =>
                        handleCheckboxChange(ingredient, event.target.checked)
                      }
                    />
                    <span className={style.ingred__checkbox_custom}></span>
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
