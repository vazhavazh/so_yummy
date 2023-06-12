import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTitle.scss';

export const PageTitle = () => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pageName = getPageName(location.pathname);
    setPageTitle(pageName);
  }, [location]);

  const getPageName = pathname => {
    const page = pathname.substring(1);

    switch (page) {
      case 'categories':
        return 'Categories';
      case 'favorite':
        return 'Favorites';
      case 'add':
        return 'Add recipe';
      case 'my':
        return 'My recipes';
      case 'search':
        return 'Search';
      case 'shopping-list':
        return 'Shopping list';
      default:
        return 'Page Title';
    }
  };

  return (
    <div className="page-wrapper">
      <div className="mainTitle-container">
        <h1 className="mainTitle">{pageTitle}</h1>
        <div className="mainTitle-decorator1"></div>
        <div className="mainTitle-decorator2"></div>
        <div className="mainTitle-decorator3"></div>
      </div>
    </div>
  );
};
