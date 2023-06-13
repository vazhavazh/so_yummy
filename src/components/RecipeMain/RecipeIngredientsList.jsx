import React from 'react'
import style from 'components/RecipeMain/RecipeMain.module.scss';
// import { useDispatch } from 'react-redux';
// import { fetchDeleteShoppingIngredient } from 'redux/shoppingIngrs/shopThunks';

export const RecipeIngredientsList = ({ ingredients }) => {
  //  const dispatch = useDispatch();

  //  const handleCheckboxChange = (ingredientId, isChecked) => {
  //    if (isChecked) {
  //      dispatch(fetchPostShoppingIngredient(ingredient));
  //    } else {
  //      dispatch(fetchDeleteShoppingIngredient(ingredient));
  //    }
  //  };
  return (
    <>
      <div className={style.list}>
        <div className={style.list__head}>
          <p className={style.list__first}>Ingridients</p>

          <div className={style.list__second}>
            <p>Number</p>
            <p>Add to list</p>
          </div>
        </div>

        <ul className={style.ingred__list}>
          {ingredients.map(ingredient => (
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
                    // checked={isChecked}
                    // onChange={handleCheckboxChange}
                  />
                  <span className={style.ingred__checkbox_custom}></span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


