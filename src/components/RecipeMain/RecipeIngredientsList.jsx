import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {
  fetchPostShoppingIngredient,
  fetchDeleteShoppingIngredient,
  fetchAllShoppingIngredients,
} from 'redux/shoppingIngrs/shopThunks';
import style from './RecipeMain.module.scss';
import { selectIsId} from 'redux/shoppingIngrs/shopSelectors';

export const RecipeIngredientsList = ({ ingredients}) => {
  // const ingredientsRedux = useSelector(selectShoppingListIngredients);
  const newId = useSelector(selectIsId);


  const dispatch = useDispatch();
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  // const [newId1, setNewId] = useState(null);
  

  useEffect(() => {
    dispatch(fetchAllShoppingIngredients());
  }, [dispatch]);
  const handleCheckboxChange = async (ingredient, isChecked) => {
    // if (isChecked) {
    //   setCheckedIngredients(prevCheckedIngredients => [
    //     ...prevCheckedIngredients,
    //     ingredient,
    //   ]);
    //  const data = await  dispatch(
    //     fetchPostShoppingIngredient({
    //       _id: ingredient._id,
    //       measure: ingredient.measure,
    //       ttl: ingredient.ttl,
    //       thb: ingredient.thb,
    //     })
    //   );
    //   // console.log(data.payload._id)
    //   console.log(`before`, ingredient);
    //   ingredient = { ...ingredient, _id: data.payload._id };
    //   console.log(`after`, ingredient);
    // } else {
     

    //   dispatch(fetchDeleteShoppingIngredient({ ...ingredient, _id: newId }));
      
    //   //   const index = checkedIngredients.findIndex(el => el._id === ingredient._id);
    //   // setCheckedIngredients(checkedIngredients.splice(index, 1));
      
      
    // }

if (isChecked) {
  setCheckedIngredients(prevCheckedIngredients => [
    ...prevCheckedIngredients,
    ingredient,
  ]);
  const data = await dispatch(
    fetchPostShoppingIngredient({
      _id: ingredient._id,
      measure: ingredient.measure,
      ttl: ingredient.ttl,
      thb: ingredient.thb,
    })
  );
  ingredient = { ...ingredient, _id: data.payload._id };
} else {
  dispatch(fetchDeleteShoppingIngredient({ ...ingredient, _id: newId }));
  setCheckedIngredients(prevCheckedIngredients =>
    prevCheckedIngredients.filter(ing => ing._id !== ingredient._id)
  );
}

  };
  // 640c2dd963a319ea671e37c6
  // 640c2dd963a319ea671e37c6

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
          {ingredients && ingredients.map(ingredient => {
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
