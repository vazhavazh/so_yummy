import React from 'react';
// import MySVGComponent from './MySVGComponent';
import style from '../RecipeMain/RecipeMain.module.scss';
// import data from 'api/fakeApi/fakeIngredientsDB.json';
// import meta from 'api/fakeApi/fakePrepDB.json';
// import { PageTitle } from 'components/PageTitle/PageTitle';
// import { selectRecipe } from 'redux/simpleReceipt/simpleReceiptSelector';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { fetchRecipe } from 'redux/simpleReceipt/simpleReceiptThunk';

export const RecipeMain = () => {
  // const [isChecked, setIsChecked] = useState(false);
  // // const [cartItems, setCartItems] = useState([]);

  // const handleCheckboxChange = ev => {
  //   setIsChecked(!isChecked);
  //   console.log(ev);
  //   // if (!isChecked) {
  //   //   // Добавление в корзину
  //   //     setCartItems([...cartItems, item]);
  //   // } else {
  //   //   // Удаление из корзины
  //   //     const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
  //   //     setCartItems(updatedCartItems);
  //   // }
  // };


  // const { title, description, preparation, ingredients, imageUrl, isFavorite } =
  //   recipe;

  // const handleAddToFavorites = () => {
  //   dispatch(addToFavorites(recipeId));
  // };

  // const handleRemoveFromFavorites = () => {
  //   dispatch(removeFromFavorites(recipeId));
  // };

  // const ingredients = data;
  // const steps = meta;
  return (
    <>
    

     

      <div className={style.prep__container}>
        <div className={style.prep__box}>
          <h3 className={style.prep__title}>Recipe Preparation</h3>
          <ol className={style.prep__list}>
            {/* {steps.map(step => (
              <li className={style.prep__item} key={step._id.$oid}>
                <p className={style.prep__step}>{step.step}</p>
              </li>
            ))} */}
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
    </>
  );
};
