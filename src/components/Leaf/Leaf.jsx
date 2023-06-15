import React from 'react';
import img from '..//..//assets/image/searchPage/kisspng-pasta-spinach-dip.png';
import styles_leaf from './Leaf.module.scss';

const Leaf = () => {
  return (
    <div className={styles_leaf.leaf_img}>
      <img src={img} alt="img"/>
    </div>
  );
};

export default Leaf;
