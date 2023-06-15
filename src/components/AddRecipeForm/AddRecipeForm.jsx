import React, {  useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { Box } from '@mui/material';
import * as Yup from 'yup';
import ReactSelect from 'react-select';
import styles from './AddRecipeForm.module.scss';
import Button from './AddRecipeButton';
import { FileInputField } from './FileInputField';
import { ReactComponent as DeleteIcon } from '../AddRecipeForm/images/ingredientsDeleteIcon.svg';
import { ReactComponent as IncrementIcon } from './images/ingredientsIncrement.svg';
import { ReactComponent as DecrementIcon } from './images/ingredientsDecrement.svg';
import categories from './data/categories.json';
import time from './data/cookingTime.json';
// import ingredients from './data/ingredients.json';
import { useDispatch, useSelector } from 'react-redux';
import { addMyOwnRecipe } from 'redux/myRecipes/myRecipesThunk';
import { useEffect } from 'react';
import { fetchAllIngredientList } from 'redux/ingredientList/ingredientListThunk';
import { selectIngredIentList } from 'redux/ingredientList/ingredientListSelector';

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
  preview: '',
  title: '',
  description: 'test',
  category: '',
  time: '',
  ingredients: [{ id: 'ingredient1', measure: '100g' }],
  instructions: '',
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  time: Yup.string().required('Cooking time is required'),
  instructions: Yup.string().required('Recipe preparation is required'),
  ingredients: Yup.array().of(
    Yup.object().shape({
      id: Yup.string().required('Select ingredient'),
      measure: Yup.string().required('Type dose'),
    })
  ),
  preview: Yup.mixed()
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
    maxHeight: '170px', // Specify the desired height
    overflowY: 'auto',
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

// const customInredientStyles = {
//   container: (baseStyles, state) => ({
//     ...baseStyles,
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '12px',
//     lineHeight: '12px',
//     border: state.isFocused ? 'none' : 'none',
//     outline: state.isFocused ? 'none' : 'none',
//   }),
//   dropdownIndicator: baseStyles => ({
//     ...baseStyles,
//     color: '#8baa36',
//   }),
//   menu: baseStyles => ({
//     ...baseStyles,
//     maxHeight: '170px', // Specify the desired height
//     overflowY: 'auto',
//   }),
//   control: (baseStyles, state) => ({
//     ...baseStyles,
//     height: '53px',
//     width: '100%',
//     border: 'none',
//     outline: 'none',
//     backgroundColor: '#f5f5f5',
//   }),
//   indicatorSeparator: baseStyles => ({
//     ...baseStyles,
//     display: 'none',
//   }),
// };

export const AddRecipeForm = () => {
  const reduxIngredients = useSelector(selectIngredIentList);
  console.log(reduxIngredients);
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(1);

      useEffect(() => {
        dispatch(fetchAllIngredientList());

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dispatch]);
  // const handleSubmit = (values, { resetForm }) => {
  //   // const preparationArray = values.preparation
  //   //   .split('\n')
  //   //   .filter(line => line.trim() !== '');
  //   // const updatedValues = {
  //   //   ...values,
  //   //   preparation: preparationArray,
  //   // };
  //   // console.log(values);
  //   dispatch(addMyOwnRecipe(values));
  //   setIsSubmitted(true);
  //   setCounter(1);
  //   resetForm();
  // };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('preview', values.preview);
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('time', values.time);
    formData.append('ingredients', JSON.stringify(values.ingredients));
    formData.append('instructions', values.instructions);

    dispatch(addMyOwnRecipe(formData))
      .then(() => {
        setIsSubmitted(true);
        setCounter(1);
        // resetForm();
      })
      .catch(() => {
        // Handle error if needed
      });
  };

  // ingredients logic:

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
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
            <div className={styles.descriptionWrapper}>
              <div className={styles.inputWrapperFile}>
                <FileInputField name="preview" reset={isSubmitted} />
                <ErrorMessage
                  className={styles.errorMessageFile}
                  name="preview"
                  component="div"
                />
              </div>
              <div className={styles.minWidthTabletContainer}>
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
                      errors.description && touched.description
                        ? styles.error
                        : ''
                    }`}
                    type="text"
                    name="description"
                    placeholder="Enter description"
                  />
                  <ErrorMessage
                    name="description"
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
                    name="category"
                    options={categories}
                    styles={customStyles}
                    isSearchable={false}
                    className={styles.ingredientCategoryInput}
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
                    errors.time && touched.time ? styles.error : ''
                  }`}
                >
                  <label className={styles.categoryLabel} htmlFor="time">
                    Cooking time
                  </label>

                  <ReactSelect
                    name="time"
                    options={time}
                    styles={customStyles}
                    isSearchable={false}
                    value={
                      isSubmitted
                        ? ''
                        : time.find(option => option.value === values.time)
                    }
                    onChange={value => setFieldValue('time', value.value)}
                  />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.ingredientsWrapper}>
              <div className={styles.ingredientsHeaderWrapper}>
                <p className={styles.ingredientsTitle}>Ingredients</p>
              </div>
              <div className={styles.ingredientsInputWrapper}>
                <FieldArray name="ingredients">
                  {({ push, remove, form }) => {
                    // console.log(form.values.ingredients);
                    return (
                      <div>
                        {form.values.ingredients.map((ingredient, index) => {
                          return (
                            <div
                              key={index}
                              className={styles.ingredientItemWrapper}
                            >
                              <div className={styles.ingredientInputWtapper}>
                                {/* <ReactSelect
                                  name={`ingredients[${index}].id`}
                                  options={ingredients}
                                  isSearchable={true}
                                  styles={customInredientStyles}
                                  placeholder="Select ingredient"
                                  value={ingredients.find(
                                    option =>
                                      option.value ===
                                      values.ingredients[index].id
                                  )}
                                  onChange={selectedOption =>
                                    setFieldValue(
                                      `ingredients[${index}].id`,
                                      selectedOption.value
                                    )
                                  }
                                /> */}
                              </div>
                              <ErrorMessage
                                name={`ingredients[${index}].id`}
                                className={styles.errorMessage}
                                component="div"
                              />
                              <Field
                                name={`ingredients[${index}].measure`}
                                placeholder="Dose"
                                className={styles.ingredientDose}
                              />
                              <ErrorMessage
                                name={`ingredients[${index}].measure`}
                                className={styles.doseErrorMessage}
                                component="div"
                              />

                              {values.ingredients.length > 1 && (
                                <DeleteIcon
                                  className={styles.deleteIcon}
                                  onClick={() => {
                                    console.log('This is delete button');
                                    remove(index);
                                    handleDecrement();
                                  }}
                                />
                              )}
                            </div>
                          );
                        })}
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
                              push({
                                id: '',
                                measure: '',
                              });
                              handleIncrement();
                            }}
                            className={styles.counterIcon}
                          />
                        </Box>
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
            </div>
            <div className={styles.preparationWrapper}>
              <div className={styles.preparationHeaderWrapper}>
                <p className={styles.ingredientsTitle}>Recipe Preparation</p>
              </div>
              <div className={styles.preparationInputWrapper}>
                <Field
                  as="textarea"
                  name="instructions"
                  className={styles.preparationInput}
                  placeholder="Enter recipe"
                />
                <ErrorMessage
                  name="instructionss"
                  component="div"
                  className={styles.prepatationError}
                />
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="submit">Add</Button>
            </div>

            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
