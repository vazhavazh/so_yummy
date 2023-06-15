import React from 'react';

import { Hero } from '../components/Hero/Hero';
import { PreviewCategories } from '../components/PreviewCategories/PreviewCategories';
import Leaf from 'components/Leaf/Leaf';

const Main = () => {
  return (
    <>
      <Hero />
      <PreviewCategories />
      <Leaf/>
    </>
  );
};

export default Main;