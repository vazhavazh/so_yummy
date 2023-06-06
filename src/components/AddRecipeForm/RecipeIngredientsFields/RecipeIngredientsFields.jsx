import React, { useEffect, useState } from 'react';
import { Box, Select, TextField, Typography } from '@mui/material';
import { Field, FieldArray } from 'formik';
import styles from './RecipeIngredientsFields.module.css';
import CustomTextField from '../TextField';
import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';
import { ReactComponent as DeleteIcon } from '../images/ingredientsDeleteIcon.svg';

export const RecipeIngredientsFields = ({
  counter,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <Box className={styles.ingredientsWrapper}>
      <Box className={styles.ingredientsHeaderWrapper}>
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
      </Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '28px',
        }}
      >
        <FieldArray name="ingredients">
          {({ push, remove, form }) => (
            <div>
              {form.values.ingredients.map((ingredient, index) => (
                <div key={index} className={styles.inputWrapper}>
                  <TextField
                    name={`ingredients[${index}].name`}
                    placeholder={`Enter ingredient${index}`}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    variant="outlined"
                    value={ingredient.name}
                    sx={{
                      width: '194px',
                      height: '53px',
                      color: 'red',
                    }}
                  />
                  <TextField
                    name={`ingredients[${index}].dose`}
                    placeholder="Dose"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={ingredient.dose}
                    sx={{ width: '84px', marginLeft: '14px' }}
                  />
                  {index > 0 && (
                    <DeleteIcon
                      width="18px"
                      height="18px"
                      cursor="pointer"
                      className={styles.deleteIcon}
                      onClick={() => {
                        remove(index);
                        handleDecrement();
                      }}
                    />
                  )}
                </div>
              ))}
              <Box className={styles.addRemoveCounter}>
                {counter > 1 && (
                  <DecrementIcon
                    onClick={() => {
                      remove(counter - 1);
                      handleDecrement();
                    }}
                    className={styles.counterIcon}
                  />
                )}
                <span>{counter}</span>
                <IncrementIcon
                  onClick={() => {
                    push({ name: '', dose: '' });
                    handleIncrement();
                  }}
                  className={styles.counterIcon}
                />
              </Box>
            </div>
          )}
        </FieldArray>
      </div>
    </Box>
  );
};
