// import React, { useState } from 'react';
// import { Box } from '@mui/material';
// import { Form, Formik } from 'formik';
// import * as Yup from 'yup';
// import styles from './AddRecipeForm.module.scss';
// import Button from './AddRecipeButton';
// import categories from './data/categories.json';
// import cookingTime from './data/cookingTime.json';
// import { RecipeDescriptionFields } from './RecipeDescriptionFields';
// import { RecipeIngredientsFields } from './RecipeIngredientsFields';
// import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

// const MAX_FILE_SIZE = 700 * 1024;

// const initialValues = {
//   title: '',
//   about: '',
//   category: 'breakfast',
//   cookingTime: '40 min',
//   recipe: '',
//   file: '',
//   ingredients: [{ name: '', dose: '' }],
//   preparation: '',
// };

// const validFileExtensions = {
//   image: ['jpg', 'png', 'jpeg', 'webp'],
// };

// function isValidFileType(fileName, fileType) {
//   return (
//     fileName &&
//     validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
//   );
// }

// const FORM_VALIDATION = Yup.object().shape({
//   title: Yup.string().required('Title is required'),
//   about: Yup.string().required('About is required'),
//   category: Yup.string().required('Category is required'),
//   cookingTime: Yup.string().required('Cooking time is required'),
// file: Yup.mixed()
//   .test('is-valid-file', 'Invalid file format', function (value) {
//     if (!value) {
//       return true;
//     }
//     return isValidFileType(value && value.name.toLowerCase(), 'image');
//   })
//   .test(
//     'is-valid-size',
//     'File size exceeds the maximum limit',
//     function (value) {
//       if (!value) {
//         return true;
//       }
//       return value.size <= MAX_FILE_SIZE;
//     }
//   )
//   .required('Image is required'),
//   ingredients: Yup.array()
//     .of(
//       Yup.object().shape({
//         name: Yup.string().required('Ingredient is required'),
//         dose: Yup.string().required('Dose is required'),
//       })
//     )
//     .required('Ingredients are required'),
//   preparation: Yup.string(),
// });

// export const AddRecipeForm = () => {
//   const [isFormSubmitted, setFormSubmitted] = useState(false);
//   const [counter, setCounter] = useState(1);

// const handleSubmit = (values, { resetForm }) => {
//   const file = values.file;
//   const errorMessage = validateFile(file);
//   if (!errorMessage) {
//     console.log(values);
//     setFormSubmitted(true);
//     setCounter(1);
//     resetForm();
//   }
// };

//   const handleIncrement = () => {
//     setCounter(prevCounter => prevCounter + 1);
//   };

//   const handleDecrement = () => {
//     if (counter > 1) {
//       setCounter(prevCounter => prevCounter - 1);
//     }
//   };

//   const validateFile = file => {
//     if (!file) {
//       return 'Please select a file';
//     }

//     if (file.size > MAX_FILE_SIZE) {
//       return 'File size exceeds the maximum limit';
//     }

//     if (!isValidFileType(file.name.toLowerCase(), 'image')) {
//       return 'Invalid file format';
//     }

//     return undefined;
//   };

//   return (
// <div className={styles.addRecipeForm}>
//   <Formik
//     initialValues={initialValues}
//     validationSchema={FORM_VALIDATION}
//     onSubmit={handleSubmit}
//   >
//     {({ values, errors }) => (
//       <Form>
//         <div className={styles.addRecipeForm}>
//           <RecipeDescriptionFields
//             isFormSubmitted={isFormSubmitted}
//             categories={categories}
//             cookingTime={cookingTime}
//           />
//           <RecipeIngredientsFields
//             counter={counter}
//             handleIncrement={handleIncrement}
//             handleDecrement={handleDecrement}
//           />
//           <RecipePreparationFields />
// <Box marginTop="18px" width="100%">
//   <Button type="submit">Submit</Button>
// </Box>
//         </div>
//         {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
//         <pre>{JSON.stringify(values, null, 4)}</pre> */}
//       </Form>
//     )}
//   </Formik>
// </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box } from '@mui/material';
import * as Yup from 'yup';
import ReactSelect from 'react-select';
import styles from './AddRecipeForm.module.scss';
import Button from './AddRecipeButton';
import { FileInputField } from './FileInputField';
import categories from './data/categories.json';
import cookingTime from './data/cookingTime.json';

const MAX_FILE_SIZE = 700 * 1024;

const validFileExtensions = {
  image: ['jpg', 'png', 'jpeg', 'webp'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

const initialValues = {
  file: '',
  title: '',
  about: '',
  category: '',
  cookingTime: '',
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  about: Yup.string().required('About is required'),
  category: Yup.string().required('Category is required'),
  cookingTime: Yup.string().required('Cooking time is required'),
  file: Yup.mixed()
    .test('is-valid-file', 'Invalid file format', function (value) {
      if (!value) {
        return true;
      }
      return isValidFileType(value && value.name.toLowerCase(), 'image');
    })
    .test(
      'is-valid-size',
      'File size exceeds the maximum limit',
      function (value) {
        if (!value) {
          return true;
        }
        return value.size <= MAX_FILE_SIZE;
      }
    )
    .required('Image is required'),
});

const customStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px',
    border: state.isFocused ? 'none' : 'none',
    outline: state.isFocused ? 'none' : 'none',
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    color: '#8baa36',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    maxHeight: '144px',
    maxWidth: '123px',
    overflow: 'scroll',
    left: '25px',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: 34,
    width: '150px',
    border: 'none',
    outline: 'none',
    textAlign: 'end',
  }),
  indicatorSeparator: baseStyles => ({
    ...baseStyles,
    display: 'none',
  }),
};

export const AddRecipeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setIsSubmitted(true);
    resetForm();
  };

  return (
    <div className={styles.addRecipeFormWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.addRecipeForm}>
            <div className={styles.inputWrapperFile}>
              <FileInputField name="file" reset={isSubmitted} />
              <ErrorMessage
                className={styles.errorMessageFile}
                name="file"
                component="div"
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field
                className={`${styles.recipeDescriptionInput} ${
                  errors.title && touched.title ? styles.error : ''
                }`}
                type="text"
                name="title"
                placeholder="Enter item title"
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="title"
                component="div"
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field
                className={`${styles.recipeDescriptionInput} ${
                  errors.about && touched.about ? styles.error : ''
                }`}
                type="text"
                name="about"
                placeholder="Enter about recipe"
              />
              <ErrorMessage
                name="about"
                component="div"
                className={styles.errorMessage}
              />
            </div>
            <div
              className={`${styles.inputWrapperCategory} ${
                errors.category && touched.category ? styles.error : ''
              }`}
            >
              <label className={styles.categoryLabel} htmlFor="category">
                Category
              </label>

              <ReactSelect
                id="category"
                name="category"
                options={categories}
                styles={customStyles}
                isSearchable={false}
                // onChange={value => setFieldValue('category', value.value)}
                value={
                  isSubmitted
                    ? ''
                    : categories.find(
                        option => option.value === values.category
                      )
                }
                onChange={value => setFieldValue('category', value.value)}
              />
              <ErrorMessage
                name="category"
                component="div"
                className={styles.errorMessage}
              />
            </div>
            <div
              className={`${styles.inputWrapperCategory} ${
                errors.cookingTime && touched.cookingTime ? styles.error : ''
              }`}
            >
              <label className={styles.categoryLabel} htmlFor="category">
                Cooking time
              </label>

              <ReactSelect
                id="cookingTime"
                name="cookingTime"
                options={cookingTime}
                styles={customStyles}
                isSearchable={false}
                value={
                  isSubmitted
                    ? ''
                    : cookingTime.find(
                        option => option.value === values.cookingTime
                      )
                }
                onChange={value => setFieldValue('cookingTime', value.value)}
              />
              <ErrorMessage
                name="cookingTime"
                component="div"
                className={styles.errorMessage}
              />
            </div>
            <Box marginTop="18px" width="100%">
              <Button type="submit">Add</Button>
            </Box>

            <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
