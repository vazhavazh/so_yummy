import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './RecipeIngredientsFields.module.css';
import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';

export const RecipeIngredientsFields = () => {
  const [counter, setCounter] = useState(3);

  console.log(Array(counter));

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  return (
    <Box className={styles.ingredientsWrapper}>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '24px',
          color: '#3E4462',
        }}
      >
        Ingredients
      </Typography>
      <Box className={styles.addRemoveCounter}>
        <DecrementIcon
          onClick={handleDecrement}
          className={styles.counterIcon}
        />
        <span>{counter}</span>
        <IncrementIcon
          onClick={handleIncrement}
          className={styles.counterIcon}
        />
      </Box>
      {[...Array(counter)].map((_, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Ingredient ${index + 1}`}
          // Add necessary input attributes and event handlers
        />
      ))}
    </Box>
  );
};
