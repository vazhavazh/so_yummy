import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { FieldArray, useFormikContext } from 'formik';
// import { Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
import styles from './RecipeIngredientsFields.module.css';
// import CustomTextField from '../TextField';
import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';
import { ReactComponent as DeleteIcon } from '../images/ingredientsDeleteIcon.svg';
import { ReactComponent as DropDownIcon } from '../images/dropDownIcon.svg';

const data = [
  { id: 'chicken', label: 'Chicken' },
  { id: 'salmon', label: 'Salmon' },
  { id: 'beef', label: 'Beef' },
  { id: 'apple cider vinegar', label: 'Apple Cider Vinegar' },
  { id: 'asparagus', label: 'Asparagus' },
  { id: 'aubergine', label: 'Aubergine' },
  { id: 'baby plum tomatoes', label: 'Baby Plum Tomatoes' },
  { id: 'bacon', label: 'Bacon' },
  { id: 'egg', label: 'Egg' },
  { id: 'cucumber', label: 'Cucumber' },
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
                  <Autocomplete
                    name={`ingredients[${index}].name`}
                    options={data}
                    popupIcon={<DropDownIcon />}
                    onChange={(e, newValue) => {
                      if (newValue) {
                        form.handleChange(`ingredients[${index}].name`)(
                          newValue.id
                        );
                      } else {
                        form.handleChange(`ingredients[${index}].name`)('');
                      }
                    }}
                    renderInput={params => (
                      <IngredientsTextField
                        {...params}
                        name={`ingredients[${index}].name`}
                      />
                    )}
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
