import React from 'react';
import data from 'api/fakeApi/fakeFavoriteDB.json';
import scss from './SearchedRecipesList.module.scss';

const SearchedRecipesList = () => {
  const favorites = data;
  return (
    <div className={scss.recipes_wrapper}>
      <ul className={scss.recipes_list}>
        {favorites.map(favorite => (
          <li key={favorite._id.$oid} className={scss.recipes_list_link}>
            <div className={scss.recipes_card_wrapper}>
              <img src={favorite.preview} className={scss.recipes_img} alt="food" />
                <div className={scss.recipes_title}>
                  <h2>{favorite.title}</h2>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedRecipesList;