// import React, { useEffect, useState } from 'react';
// import { Box, Select, TextField, Typography } from '@mui/material';
// import { Field, FieldArray, ErrorMessage, useFormikContext } from 'formik';
// import styles from './RecipeIngredientsFields.module.css';
// import CustomTextField from '../TextField';
// import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
// import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';
// import { ReactComponent as DeleteIcon } from '../images/ingredientsDeleteIcon.svg';

// import { useState } from 'react';

// export const RecipeIngredientsFields = ({
//   counter,
//   handleIncrement,
//   handleDecrement,
// }) => {
//   const { values } = useFormikContext();
//   return (
//     <Box className={styles.ingredientsWrapper}>
//       <Box className={styles.ingredientsHeaderWrapper}>
//         <Typography
//           sx={{
//             fontFamily: 'Poppins',
//             fontStyle: 'normal',
//             fontWeight: '600',
//             fontSize: '24px',
//             lineHeight: '24px',
//             color: '#3E4462',
//           }}
//         >
//           Ingredients
//         </Typography>
//       </Box>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           width: '100%',
//           marginTop: '28px',
//         }}
//       >
//         <FieldArray name="ingredients">
//           {({ push, remove, form }) => (
//             <div>
//               {form.values.ingredients.map((ingredient, index) => (
//                 <div key={index} className={styles.inputWrapper}>
//                   <TextField
//                     name={`ingredients[${index}].name`}
//                     placeholder={`Enter ingredient${index}`}
//                     onChange={form.handleChange}
//                     onBlur={form.handleBlur}
//                     variant="outlined"
//                     value={ingredient.name}
//                     sx={{
//                       width: '194px',
//                       height: '53px',
//                       color: 'red',
//                     }}
//                   />
//                   <TextField
//                     name={`ingredients[${index}].dose`}
//                     placeholder="Dose"
//                     onChange={form.handleChange}
//                     onBlur={form.handleBlur}
//                     value={ingredient.dose}
//                     sx={{ width: '84px', height: '53px', marginLeft: '14px' }}
//                   />
//                   {values.ingredients.length > 1 && (
//                     <DeleteIcon
//                       width="18px"
//                       height="18px"
//                       cursor="pointer"
//                       className={styles.deleteIcon}
//                       onClick={() => {
//                         remove(index);
//                         delete values.ingredients[index];
//                         handleDecrement();
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//               <Box className={styles.addRemoveCounter}>
//                 {counter > 1 && (
//                   <DecrementIcon
//                     onClick={() => {
//                       remove(counter - 1);
//                       handleDecrement();
//                     }}
//                     className={styles.counterIcon}
//                   />
//                 )}
//                 <span>{counter}</span>
//                 <IncrementIcon
//                   onClick={() => {
//                     push({ name: '', dose: '' });
//                     handleIncrement();
//                   }}
//                   className={styles.counterIcon}
//                 />
//               </Box>
//             </div>
//           )}
//         </FieldArray>
//       </div>
//     </Box>
//   );
// };

import React, { useEffect, useState } from 'react';
import { Box, Select, TextField, Typography } from '@mui/material';
import {
  Field,
  FieldArray,
  ErrorMessage,
  useFormikContext,
  useField,
} from 'formik';
import styles from './RecipeIngredientsFields.module.css';
import IngredientsTextField from '../IngredientsTextField';
import { ReactComponent as IncrementIcon } from '../images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from '../images/ingredientsDecrement.svg';
import { ReactComponent as DeleteIcon } from '../images/ingredientsDeleteIcon.svg';

export const RecipeIngredientsFields = ({
  counter,
  handleIncrement,
  handleDecrement,
}) => {
  const { values, errors, touched } = useFormikContext();
  const [field, meta] = useField(`ingredients`);
  const [hasValues, setHasValues] = useState(false); // Variable to track if values are entered

  useEffect(() => {
    // Check if initial values exist
    const initialValuesExist = values.ingredients.some(
      ingredient => ingredient.name !== '' && ingredient.dose !== ''
    );
    setHasValues(initialValuesExist);
  }, [values.ingredients]);

  // console.log(errors.ingredients ? errors.ingredients.length : null);
  // console.log(errors.ingredients ? errors.ingredients : null);
  // console.log(useFormikContext());
  // console.log(errors.ingredients ? errors.ingredients[0].name : null);
  // const ingredientsError = Boolean(
  //   errors.ingredients && errors.ingredients.length
  // );

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
                  {/* <TextField
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
                    sx={{ width: '84px', height: '53px', marginLeft: '14px' }}
                  /> */}
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
