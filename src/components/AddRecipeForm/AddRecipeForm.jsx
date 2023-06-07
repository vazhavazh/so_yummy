import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AddRecipeForm.module.scss';
import Button from './AddRecipeButton';
import categories from './data/categories.json';
import cookingTime from './data/cookingTime.json';
import { RecipeDescriptionFields } from './RecipeDescriptionFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';

const MAX_FILE_SIZE = 700 * 1024;

const initialValues = {
  title: '',
  about: '',
  category: 'breakfast',
  cookingTime: '40 min',
  recipe: '',
  file: '',
  ingredients: [{ name: '', dose: '' }],
  preparation: '',
};

const validFileExtensions = {
  image: ['jpg', 'png', 'jpeg', 'webp'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}

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
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Ingredient is required'),
        dose: Yup.string().required('Dose is required'),
      })
    )
    .required('Ingredients are required'),
  preparation: Yup.string().required(),
});

export const AddRecipeForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleSubmit = (values, { resetForm }) => {
    const file = values.file;
    const errorMessage = validateFile(file);
    if (!errorMessage) {
      console.log(values);
      setFormSubmitted(true);
      setCounter(1);
      resetForm();
    }
  };

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const validateFile = file => {
    if (!file) {
      return 'Please select a file';
    }

    if (file.size > MAX_FILE_SIZE) {
      return 'File size exceeds the maximum limit';
    }

    if (!isValidFileType(file.name.toLowerCase(), 'image')) {
      return 'Invalid file format';
    }

    return undefined;
  };

  return (
    <div className={styles.addRecipeForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <div className={styles.addRecipeForm}>
              <RecipeDescriptionFields
                isFormSubmitted={isFormSubmitted}
                categories={categories}
                cookingTime={cookingTime}
              />
              <RecipeIngredientsFields
                counter={counter}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <RecipePreparationFields />
              <Box marginTop="18px" width="100%">
                <Button type="submit">Submit</Button>
              </Box>
            </div>
            {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
