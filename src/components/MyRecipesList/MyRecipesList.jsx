import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyRecipesList.scss';
import { ReactComponent as TrashIcon } from 'assets/svg/favoritePage/trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyOwnRecipes,
  selectIsLoading,
} from 'redux/myRecipes/myRecipesSelector';
import { fetchAllMyOwnRecipes } from 'redux/myRecipes/myRecipesThunk';
import Loader from 'components/Loader/Loader';

import img from 'assets/image/searchPage/asdd.png';
import scss from 'components/Search/SearchBar/SearchBar.module.scss';

export const MyRecipesList = () => {
  const dispatch = useDispatch();
  const myOwnRecipes = useSelector(selectMyOwnRecipes);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllMyOwnRecipes());
   
  }, [dispatch]);

   if (isLoading) {
     return <Loader />;
   }

   if (!myOwnRecipes || !Array.isArray(myOwnRecipes) || myOwnRecipes.length === 0) {
     return (
       <div className={scss.searchLookingWrapper}>
         <img src={img} alt="images" />
         <p className="emptyName">You didn't create your own recipes...</p>
       </div>
     );

   }
  return (
    <div className="flexWrapper">
      <div className="favorites-container">
        <ul className="favorites-list">
          {myOwnRecipes.map(favorite => (
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
                // onClick={() => handleUpdateFavoriteReceipt(favorite._id)}
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
      </div>
    </div>
  );
};


    // <div className="flexWrapper">
    //   <div className="favorites-container">
    //     <ul className="favorites-list">
    //       {myOwnRecipes.map(favorite => (
    //         <li key={favorite._id} className="favorite-item">
    //           <div className="favorite-img-wrapper">
    //             <img
    //               src={favorite.preview}
    //               alt="food"
    //               className="favorite-img again"
    //             />
    //           </div>

    //           <button
    //             className="favorite-delete-btn trashBtn mod"
    //             type="button"
    //             // onClick={() => handleDelete(favorite._id.$oid)}
    //           >
    //             <TrashIcon className="trashBtn--icon mod--icon" />
    //           </button>

    //           <div className="favorite-description-wrapper">
    //             <div>
    //               <h2 className="favorite-title">{favorite.title}</h2>
    //               <p className="favorite-description">{favorite.description}</p>
    //             </div>
    //             <span className="favorite-time">{favorite.time} min</span>
    //           </div>
    //           <Link
    //             className="base-link-leaf favorite-link base-link-leaf--mod"
    //             to={`/recipe/${favorite._id.$oid}`}
    //           >
    //             <span className="base-link-leaf--mod--span">See recipe</span>
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>