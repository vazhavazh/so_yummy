// import { lazy, useEffect } from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';
// import { PrivateRoute } from '../hoc/PrivateRoute';
// import { PublicRoute } from '../hoc/PublicRoute';

const AddRecipe = lazy(() => import('../pages/AddRecipe'));
const Categories = lazy(() => import('../pages/Categories'));
const Favorite = lazy(() => import('../pages/Favorite'));
const Main = lazy(() => import('../pages/Main'));
const MyRecipes = lazy(() => import('../pages/MyRecipes'));
const Recipe = lazy(() => import('../pages/Recipe'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Search = lazy(() => import('../pages/Search'));
const ShoppingList = lazy(() => import('../pages/ShoppingList'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Welcome = lazy(() => import('../pages/Welcome'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} path="/main" />
          <Route
            path="/welcome"
            element={
              // <PublicRoute>
              <Welcome />
              // </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              // <PublicRoute>
              <RegisterPage />
              // </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              // <PublicRoute>
              <SignIn />
              // </PublicRoute>
            }
          />
          <Route
            path="/categories"
            element={
              // <PrivateRoute>
              <Categories />
              // </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              // <PrivateRoute>
              <AddRecipe />
              // </PrivateRoute>
            }
          />
          <Route
            path="/favorite"
            element={
              // <PrivateRoute>
              <Favorite />
              // </PrivateRoute>
            }
          />
          <Route
            path="/my"
            element={
              // <PrivateRoute>
              <MyRecipes />
              // </PrivateRoute>
            }
          />
          <Route
            path="/recipe/:recipeId"
            element={
              // <PrivateRoute>
              <Recipe />
              // </PrivateRoute>
            }
          />
          <Route
            path="/search"
            element={
              // <PrivateRoute>
              <Search />
              // </PrivateRoute>
            }
          />
          <Route
            path="/shopping-list"
            element={
              // <PrivateRoute>
              <ShoppingList />
              // </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
