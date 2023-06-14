import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTitle.scss';

export const PageTitle = ({ recipeTitle }) => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pageName = getPageName(location.pathname);
    setPageTitle(pageName);
  }, [location]);

  const getPageName = pathname => {
    if (pathname.includes('categories')) {
      return 'Category';
    } else {
      switch (pathname) {
        case '/favorite':
          return 'Favorites';
        case '/add':
          return 'Add recipe';
        case '/my':
          return 'My recipes';
        case '/search':
          return 'Search';
        case '/shopping-list':
          return 'Shopping list';
        default:
          return 'Page Title';
      }
    }
  };

  return (
    <>
      {recipeTitle ? (
        <h1 className="recipeName">{recipeTitle}</h1>
      ) : (
        <div className="page-wrapper">
          <div className="mainTitle-container">
            <h1 className="mainTitle">{pageTitle}</h1>
            <div className="mainTitle-decorator1"></div>
            <div className="mainTitle-decorator2"></div>
            <div className="mainTitle-decorator3"></div>
          </div>
        </div>
      )}
    </>
  );
};
