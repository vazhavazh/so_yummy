import React, { useEffect, useState } from 'react';
import MySVGComponent from './MySVGComponent';
import style from '../RecipeMain/RecipeMain.module.scss';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostShoppingIngredient, fetchDeleteShoppingIngredient, fetchAllShoppingIngredients } from 'redux/shoppingIngrs/shopThunks';
import { selectShoppingListIngredients } from 'redux/shoppingIngrs/shopSelectors';
import { fetchAllFavoriteReceipts, fetchUpdateFavoriteReceipts } from 'redux/favoriteReceipts/favoriteReceiptsThunks';
import { selectFavoriteReceipts } from 'redux/favoriteReceipts/favoriteReceiptsSelector';
import { selectDarkMode } from 'redux/theme/themeSelector';

export const RecipeMain = () => {
  const darkMode = useSelector(selectDarkMode);
  const favorites = useSelector(selectFavoriteReceipts);
  const ingredientsRedux = useSelector(selectShoppingListIngredients);
  const dispatch = useDispatch();
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipeId, setRecipeId] = useState('');

  useEffect(() => {
    dispatch(fetchAllShoppingIngredients());
    dispatch(fetchAllFavoriteReceipts({ page: 1, limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    const id = getId();
    setRecipeId(id);
    getRecipe(id);
    const isRecipeFavorite = favorites.some((favRecipe) => favRecipe._id === id);
    setIsFavorite(isRecipeFavorite);
    const recipeKey = `favorite_${id}`;

    const savedIsFavorite = localStorage.getItem(recipeKey);
    setIsFavorite(savedIsFavorite === 'true');

    return () => {
      setRecipe(null);
    };
  }, []);

  const handleFavoriteClick = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    const recipeKey = `favorite_${recipeId}`;
    localStorage.setItem(recipeKey, newIsFavorite.toString());

    if (newIsFavorite) {
      dispatch(fetchUpdateFavoriteReceipts(recipeId));
    }
  };

  const handleCheckboxChange = (ingredient, isChecked) => {
    if (isChecked) {
      setCheckedIngredients((prevCheckedIngredients) => [
        ...prevCheckedIngredients,
        ingredient,
      ]);
      dispatch(
        fetchPostShoppingIngredient({
          _id: ingredient._id,
          measure: ingredient.measure,
          ttl: ingredient.ttl,
          thb: ingredient.thb,
        })
      )
        .then((response) => {
          ingredient.shopId = response.payload._id;
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setCheckedIngredients((prevCheckedIngredients) =>
        prevCheckedIngredients.filter((ing) => ing._id !== ingredient._id)
      );
      const ingredientObj = ingredientsRedux.find(
        (ing) => ing._id === ingredient.shopId
      );
      console.log(ingredientObj);

      dispatch(fetchDeleteShoppingIngredient(ingredientObj));
    }
  };

  function getId() {
    const url = window.location.href;
    const parts = url.split('/');
    const id = parts[parts.length - 1];
    return id;
  }

  async function getRecipe(id) {
    const response = await axios.get(`api/recipes/${id}`);
    const newRecipe = response.data[0];
    setRecipe(newRecipe);
  }

  if (!recipe) {
    return <Loader />;
  }

  const stepsArray = recipe.instructions.split('.');
  const ingredItem = darkMode ? style.ingred__item_dark : style.ingred__item;
  const ingredCheck = darkMode ? style.prep__step_dark : style.prep__step;
  const stepsTitleClass = darkMode ? style.prep__title_dark : style.prep__title;
  const stepClass = darkMode ? style.prep__step_dark : style.prep__step;

  return (
    <div className={style.body}>
      <div className={style.hero}>
        <h1 className={style.hero__title}>{recipe.title}</h1>
        <p className={style.hero__text}>{recipe.description}</p>
        <button className={style.hero__button} onClick={handleFavoriteClick}>
          {isFavorite ? 'Delete from favorite' : 'Add to favorite recipes'}
        </button>
        <div className={style.hero__clock}>
          <MySVGComponent className={style.svg} />
          <p className={style.hero__time}>20 min</p>
        </div>
      </div>
      <div className={style.list}>
        <div className={style.list__head}>
          <p className={style.list__first}>Ingredients</p>
          <div className={style.list__second}>
            <p>Number</p>
            <p>Add to list</p>
          </div>
        </div>
        <ul className={style.ingred__list}>
          {recipe.ingredients.map((ingredient) => {
            const isChecked = checkedIngredients.some(
              (ing) => ing._id === ingredient._id
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
                      onChange={(event) =>
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

      <div className={style.prep__container}>
        <div className={style.prep__box}>
          <h3 className={stepsTitleClass}>Recipe Preparation</h3>
          <ol className={style.prep__list}>
            {stepsArray.map((step, index) => {
              if (step.trim() !== '') {
                return (
                  <li className={style.prep__item} key={index}>
                    <p className={stepClass}>{step}</p>
                  </li>
                );
              }
              return null;
            })}
          </ol>
        </div>
        <div>
          <img className={style.prep__img} src={recipe.thumb} alt="dish" />
        </div>
      </div>
    </div>
  );
};