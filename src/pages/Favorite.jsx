import React from 'react';
import { FavoriteReceipts } from 'components/FavoriteReceipts/FavoriteReceipts';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Leaf from 'components/Leaf/Leaf';

const Favorite = () => {
  return (
    <>
      <PageTitle />
      <FavoriteReceipts />
      <Leaf/>
    </>
  );
};

export default Favorite;
