import React from 'react';
import styles from './MainTitle.module.scss';

export const MainTitle = ({ text }) => {
  return <h1 className={styles.mainTitle}>{text}</h1>;
};
