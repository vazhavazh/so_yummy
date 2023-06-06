import React from 'react';
import { Link } from 'react-router-dom';
import data from 'api/fakeApi/fakeFavoriteDBcopy.json';
import './MyRecipesList.scss';
import { ReactComponent as TrashIcon } from 'assets/svg/favoritePage/trash.svg';

export const MyRecipesList = () => {
  const favorites = data;
  return (
    <div className="favorites-container">
      <ul className="favorites-list">
        {favorites.map(favorite => (
          <li key={favorite._id.$oid} className="favorite-item">
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
              // onClick={() => handleDelete(favorite._id.$oid)}
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
              className="base-link-leaf favorite-link"
              to={`/recipe/${favorite._id.$oid}`}
            >
              <span>See recipe</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
