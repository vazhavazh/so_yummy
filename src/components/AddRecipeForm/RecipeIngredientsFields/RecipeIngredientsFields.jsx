import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './RecipeIngredientsFields.module.css';
import CustomTextField from '../TextField';
import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';

export const RecipeIngredientsFields = () => {
  const [counter, setCounter] = useState(3);

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };
  return (
    <>
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
      </Box>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CustomTextField
          name="ingredient"
          placeholder="Enter ingredient name"
        />
      </div>
    </>
  );
};
