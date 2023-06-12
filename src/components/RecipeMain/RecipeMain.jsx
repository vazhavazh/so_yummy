import React, { useState } from 'react';
import MySVGComponent from './MySVGComponent';
import style from '../RecipeMain/RecipeMain.module.scss';
import data from 'api/fakeApi/fakeIngredientsDB.json';
import meta from 'api/fakeApi/fakePrepDB.json';
import { PageTitle } from 'components/PageTitle/PageTitle';

export const RecipeMain = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const handleCheckboxChange = ev => {
    setIsChecked(!isChecked);
    console.log(ev);
    // if (!isChecked) {
    //   // Добавление в корзину
    //     setCartItems([...cartItems, item]);
    // } else {
    //   // Удаление из корзины
    //     const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    //     setCartItems(updatedCartItems);
    // }
  };

  const ingredients = data;
  const steps = meta;
  return (
    <div className={style.body}>
      <div className={style.hero}>
        {/* <h1 className={style.hero__title}>Salmon Avacado Salad</h1> */}
        <PageTitle recipeTitle={`Salmon Avacado Salad`} />
        <p className={style.hero__text}>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </p>
        <button className={style.hero__button}>Add to favorite recipes</button>

        <div className={style.hero__clock}>
          <MySVGComponent className={style.svg} />
          <p className={style.hero__time}>20 min</p>
        </div>
      </div>

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
            <li className={style.ingred__item} key={ingredient._id.$oid}>
              <div className={style.ingred__wrapper}>
                <img
                  className={style.ingred__img}
                  src={ingredient.thb}
                  alt={ingredient.ttl}
                />

                <h2 className={style.ingred__name}>{ingredient.ttl}</h2>
              </div>

              <div className={style.ingred__wrapper_second}>
                <p className={style.ingred__quantity}>100g</p>
                <label className={style.checkbox__wrapper}>
                  <input
                    className={style.ingred__checkbox}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className={style.ingred__checkbox_custom}></span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.prep__container}>
        <div className={style.prep__box}>
          <h3 className={style.prep__title}>Recipe Preparation</h3>
          <ol className={style.prep__list}>
            {steps.map(step => (
              <li className={style.prep__item} key={step._id.$oid}>
                <p className={style.prep__step}>{step.step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <img
            className={style.prep__img}
            src="./static/media/salad.07661521d67a51570636.jpg"
            alt="dish"
          />
        </div>
      </div>
    </div>
  );
};
