import { lazy, useEffect } from 'react';
import { Routes, Route,  useLocation } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authThunks';
import { PrivateRoute } from '../hoc/PrivateRoute';
import { PublicRoute } from '../hoc/PublicRoute';
import { Unsubscribe } from './Unsubscribe/Unsubscribe';
import { setFromFooterState } from 'redux/search/searchThunks';


const AddRecipe = lazy(() => import('../pages/AddRecipe'));
const Categories = lazy(() => import('../pages/CategoriesPage'));
const Favorite = lazy(() => import('../pages/Favorite'));
const Main = lazy(() => import('../pages/Main'));
const MyRecipes = lazy(() => import('../pages/MyRecipes'));
const MyRecipe2 = lazy(() => import('../pages/MyRecipe2'));
const Recipe = lazy(() => import('../pages/Recipe'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Search = lazy(() => import('../pages/Search'));
const ShoppingList = lazy(() => import('../pages/ShoppingList'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Welcome = lazy(() => import('../pages/WelcomePage'));
const ErrorPage = lazy(() => import('../pages/Error'));


export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath !== '/search') {
      dispatch(setFromFooterState(false));
    }
  }, [location.pathname, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />

          <Route
            path="/welcome"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />

          <Route
            path="/categories/:categoriesName"
            element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddRecipe />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorite"
            element={
              <PrivateRoute>
                <Favorite />
              </PrivateRoute>
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute>
                <MyRecipes />
              </PrivateRoute>
            }
          />
          <Route
            path="/recipe/:recipeId"
            element={
              <PrivateRoute>
                <Recipe />
              </PrivateRoute>
            }
          />
          <Route
            path="/recipe_/:recipeId"
            element={
              <PrivateRoute>
                <MyRecipe2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoute>
                <Search />
              </PrivateRoute>
            }
          />
          <Route
            path="/shopping-list"
            element={
              <PrivateRoute>
                <ShoppingList />
              </PrivateRoute>
            }
          />
          <Route
            path="/unsubscription/:id"
            element={
              <PrivateRoute>
                <Unsubscribe />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="*" element={<Navigate to="/error" />} /> */}
        </Route>
      </Routes>
    </>
  );
};
