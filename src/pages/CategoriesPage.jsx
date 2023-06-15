import { Categories } from 'components/Categories/Categories';
import Leaf from 'components/Leaf/Leaf';
import { PageTitle } from 'components/PageTitle/PageTitle';
import React from 'react';

const CategoriesPage = () => {
  return (
    <div>
      <PageTitle />
      <Categories />
      <Leaf/>
    </div>
  );
};

export default CategoriesPage;
