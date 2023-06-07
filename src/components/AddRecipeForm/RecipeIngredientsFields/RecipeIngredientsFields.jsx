import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FieldArray, useFormikContext, useField } from 'formik';
import AsyncSelect from 'react-select/async';
import styles from './RecipeIngredientsFields.module.css';
import IngredientsTextField from '../IngredientsTextField';
import ingredientsData from '../../../api/fakeApi/fakeIngredientsDB.json';
import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';
import { ReactComponent as DeleteIcon } from '../images/ingredientsDeleteIcon.svg';

const data = [
  { value: 'chicken', label: 'Chicken' },
  { value: 'salmon', label: 'Salmon' },
  { value: 'beef', label: 'Beef' },
  { value: 'apple cider vinegar', label: 'Apple Cider Vinegar' },
  { value: 'asparagus', label: 'Asparagus' },
  { value: 'aubergine', label: 'Aubergine' },
  { value: 'baby plum tomatoes', label: 'Baby Plum Tomatoes' },
  { value: 'bacon', label: 'Bacon' },
  { value: 'egg', label: 'Egg' },
  { value: 'cucumber', label: 'Cucumber' },
];

export const RecipeIngredientsFields = ({
  counter,
  handleIncrement,
  handleDecrement,
}) => {
  const { values, errors, touched } = useFormikContext();
  const [field, meta] = useField(`ingredients`);
  const [hasValues, setHasValues] = useState(false);

  useEffect(() => {
    const initialValuesExist = values.ingredients.some(
      ingredient => ingredient.name !== '' && ingredient.dose !== ''
    );
    setHasValues(initialValuesExist);
  }, [values.ingredients]);

  const filterColors = inputValue => {
    return data.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

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
        <AsyncSelect loadOptions={promiseOptions} defaultOptions />
        <FieldArray name="ingredients">
          {({ push, remove, form }) => (
            <div>
              {form.values.ingredients.map((ingredient, index) => (
                <div key={index} className={styles.inputWrapper}>
                  <IngredientsTextField
                    name={`ingredients[${index}].name`}
                    placeholder="Name"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={ingredient.name}
                    sx={{
                      width: '194px',
                      height: '53px',
                      color: 'red',
                    }}
                  />
                  <IngredientsTextField
                    name={`ingredients[${index}].dose`}
                    placeholder="Dose"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={ingredient.dose}
                    sx={{ width: '84px', height: '53px', marginLeft: '14px' }}
                  />
                  {values.ingredients.length > 1 && (
                    <DeleteIcon
                      width="18px"
                      height="18px"
                      cursor="pointer"
                      className={styles.deleteIcon}
                      onClick={() => {
                        remove(index);
                        delete values.ingredients[index];
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
      {meta && meta.touched && meta.error && !hasValues && (
        <p className={styles.ingredientsErrorField}>
          At least one ingredient with dose is required
        </p>
      )}
    </Box>
  );
};
