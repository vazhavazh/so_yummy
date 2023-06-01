import { Categories } from 'components/Categories/Categories';
import { FavoriteReceipts } from 'components/FavoriteReceipts/FavoriteReceipts';
import React from 'react';

export const Header = () => {
  return (
    <div>
      Header
      {/* <FavoriteReceipts /> */}
      <Categories />
    </div>
  );
};
