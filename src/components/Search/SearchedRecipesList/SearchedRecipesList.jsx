import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectSearchData,
} from 'redux/search/searchSelector';
import 'redux/search/searchThunks';
import { RecipeCard } from '..//..//RecipeCard/RecipeCard';
import style from '..//..//PreviewCategories/PreviewCategories.module.scss';
import scss from '..//..//Search/SearchBar/SearchBar.module.scss';
import img from '..//..//..//assets/image/searchPage/asdd.png';
import Loader from '..//..//Loader/Loader';

const SearchedRecipesList = ({ searchValue }) => {
  // eslint-disable-next-line
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [prevSearchValue, setPrevSearchValue] = useState('');
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const searchData = useSelector(selectSearchData);

  useEffect(() => {
    if (prevSearchValue === searchValue) {
      return;
    }

    if (!searchValue) {
      setFilteredRecipes([]);
      setPrevSearchValue('');
      return;
    }

    setIsLoading(true);

    const delayTimer = setTimeout(() => {
      const filtered = searchData.filter(search =>
        search.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredRecipes(filtered);
      setPrevSearchValue(searchValue);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delayTimer);
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <div className={scss.searchLookingWrapper}>
          <img src={img} alt="images" />
          <p>Try looking for something else...</p>
        </div>
      )}
      {searchData && (
        <div
          style={{ backgroundColor: 'var(--whiteSearchToDark)' }}
          className={style.previewCategoriesBox}
        >
          <ul className={style.previewCategoriesList}>
            <li className={style.previewCategoriesListEll}>
              <ul className={style.recipeListSearch}>
                {searchData.map(recipe => (
                  <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchedRecipesList;