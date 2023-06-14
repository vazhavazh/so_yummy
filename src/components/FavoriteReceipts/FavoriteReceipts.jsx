import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './FavoriteReceipts.scss';
import { ReactComponent as TrashIcon } from 'assets/svg/favoritePage/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalPages,
  selectFavoriteReceipts,
  selectIsLoading,
} from 'redux/favoriteReceipts/favoriteReceiptsSelector';
import {
  fetchAllFavoriteReceipts,
  fetchUpdateFavoriteReceipts,
} from 'redux/favoriteReceipts/favoriteReceiptsThunks';
import { Pagination } from '../Pagination/Pagination';

import Loader from 'components/Loader/Loader';

import img from 'assets/image/searchPage/asdd.png';
import scss from 'components/Search/SearchBar/SearchBar.module.scss';

export const FavoriteReceipts = () => {
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteReceipts);
  const isLoading = useSelector(selectIsLoading);

  let query = {
    page,
    limit: 4,
  };

  useEffect(() => {
    dispatch(fetchAllFavoriteReceipts(query));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onChangePage = currentPage => {
    if (currentPage !== '...') {
      const number = Number(currentPage);

      const element = document.getElementById('ahcnor1');
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }

      setPage(number);
    }
  };

  const handleUpdateFavoriteReceipt = async receiptId => {
    try {
      await dispatch(fetchUpdateFavoriteReceipts(receiptId));
      if (favorites.length === 1 && page > 2) {
        setPage(page - 1);
      }
      dispatch(fetchAllFavoriteReceipts(query));
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!favorites || !Array.isArray(favorites) || totalPages === 0) {
    return (
      <div className={scss.searchLookingWrapper}>
        <img src={img} alt="images" />
        <p className="emptyName">Your favorite recipes list still empty...</p>
      </div>
    );
  }

  return (
    <div className="flexWrapper">
      <div className="favorites-container">
        <ul className="favorites-list">
          {favorites.map(favorite => (
            <li key={favorite._id} className="favorite-item">
              <div className="favorite-img-wrapper">
                <img
                  src={favorite.preview}
                  alt="food"
                  className="favorite-img again"
                />
              </div>

              <button
                className="favorite-delete-btn trashBtn"
                type="button"
                onClick={() => handleUpdateFavoriteReceipt(favorite._id)}
              >
                <TrashIcon className="trashBtn--icon" />
              </button>

              <div className="favorite-description-wrapper">
                <div>
                  <h2 className="favorite-title">{favorite.title}</h2>
                  <p className="favorite-description">{favorite.description}</p>
                </div>
                <span className="favorite-time">{favorite.time} min</span>
              </div>
              <Link
                className="base-link-leaf favorite-link base-link-leaf--mod"
                to={`/recipe/${favorite._id}`}
              >
                <span className="base-link-leaf--mod--span">See recipe</span>
              </Link>
            </li>
          ))}
        </ul>
        {totalPages !== 1 && totalPages && (
          <Pagination
            totalPages={totalPages}
            currentpage={page}
            onChangePage={onChangePage}
          />
        )}
      </div>
    </div>
  );
};
