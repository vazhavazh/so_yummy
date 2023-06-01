import './Categories.scss';

import { CategoriesItem } from './CategoriesItem/CategoriesItem';

export const Categories = () => {
  return (
    <div className="categories">
      <h2 className="categories-title">Categorises</h2>
      <div className="categories-switcher">dfgsdfgsdfg</div>
      <div className="categories-cards">
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
      </div>
    </div>
  );
};
