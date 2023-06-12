import React, { useEffect, useState } from 'react';
import recipes from '..//..//..//api/fakeApi/fakeFavoriteDBcopy';
import { RecipeCard } from '..//..//RecipeCard/RecipeCard';
import style from '..//..//PreviewCategories/PreviewCategories.module.scss';
import scss from '..//..//Search/SearchBar/SearchBar.module.scss';
import img from 'assets/image/searchPage/asdd.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '..//..//Loader/Loader';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

const SearchedRecipesList = ({ searchValue }) => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

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
      const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredRecipes(filtered);
      setPrevSearchValue(searchValue);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delayTimer);
    // eslint-disable-next-line
  }, [searchValue]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const recipesPerPage = isMobileOrTablet ? 6 : filteredRecipes.length;
  const offset = currentPage * recipesPerPage;
  const paginatedRecipes = filteredRecipes.slice(offset, offset + recipesPerPage);
  const pageCount = Math.ceil(filteredRecipes.length / recipesPerPage);

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <Loader />
      ) : paginatedRecipes.length > 0 ? (
        <div className={style.previewCategoriesBox}>
          <ul className={style.previewCategoriesList}>
            <li className={style.previewCategoriesListEll}>
              <ul className={style.recipeListSearch}>
                {paginatedRecipes.map((recipe) => (
                  <RecipeCard key={recipe._id.$oid} recipe={recipe} />
                ))}
              </ul>
            </li>
          </ul>
          {filteredRecipes.length > recipesPerPage && isMobileOrTablet ? (
            <ReactPaginate
              className={scss.pagination}
              previousLabel={<BsChevronLeft />}
              nextLabel={<BsChevronRight />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={style.pagination}
              subContainerClassName={`${style.pages} ${style.pagination}`}
              activeClassName={scss.activePage}
            />
          ) : null}
        </div>
      ) : (
        <div className={scss.searchLookingWrapper}>
          <img src={img} alt="images" />
          <p>Try looking for something else...</p>
        </div>
      )}
    </>
  );
};

export default SearchedRecipesList;