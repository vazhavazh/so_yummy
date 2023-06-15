import React, { useEffect } from 'react';
import { FavoriteReceipts } from 'components/FavoriteReceipts/FavoriteReceipts';
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
      <FavoriteReceipts />
      <Leaf />
    </>
  );
};

export default Favorite;
