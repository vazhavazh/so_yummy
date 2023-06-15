import React, { useEffect } from 'react';
import { FavoriteReceipts } from 'components/FavoriteReceipts/FavoriteReceipts';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Leaf from 'components/Leaf/Leaf';

const Favorite = () => {
  useEffect(() => {
    const element = document.getElementById('ahcnor1');
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <PageTitle />
      <FavoriteReceipts />
      <Leaf />
    </>
  );
};

export default Favorite;
