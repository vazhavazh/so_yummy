import React from 'react';
import styles from './MainTitle.module.scss';

export const MainTitle = ({ title }) => {
  return <h1 className={styles.mainTitle}>{title}</h1>;
};
