import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoading, selectSearchData } from 'redux/search/searchSelector';

import { fetchAllSearchedIngredient, fetchAllSearchedTitle } from 'redux/search/searchThunks';


 export const TestComponent = () => {
   const loading = useSelector(selectLoading);
   const error = useSelector(selectError);
   const searchData = useSelector(selectSearchData);
   const dispatch = useDispatch();

   const handleSearchByTitle = title => {
     dispatch(fetchAllSearchedTitle(title));
   };

   const handleSearchByIngredient = ingredient => {
     dispatch(fetchAllSearchedIngredient(ingredient));
   };

   // Другие обработчики событий и рендеринг компонента...

   return (
     <div>
       {loading && <p>Loading...</p>}
       {error && <p>Error: {error}</p>}
       {searchData && (
         <ul>
           {searchData.map(item => (
             <li key={item.id}>{item.title}</li>
           ))}
         </ul>
       )}

     
       <input type="text" onChange={e => handleSearchByTitle(e.target.value)} />
       <button onClick={() => handleSearchByIngredient('some ingredient')}>
         Search by Ingredient
       </button>
     </div>
   );
 };
