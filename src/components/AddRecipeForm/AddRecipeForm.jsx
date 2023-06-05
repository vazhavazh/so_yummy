import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AddRecipeForm.module.scss';
import CustomTextField from './TextField';
import Select from './Select';
import Button from './AddRecipeButton';
import categories from './categories';
import cookingTime from './cookingTime';
import { FileUploadField } from './FileInputField';

const MAX_FILE_SIZE = 700 * 1024;

const initialValues = {
  title: '',
  about: '',
  category: 'breakfast',
  cookingTime: '40 min',
  recipe: '',
  file: '',
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
  recipe: Yup.string().required('Recipe is required'),
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

export const AddRecipeForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const file = values.file;
    const errorMessage = validateFile(file);
    if (!errorMessage) {
      console.log(values);
      setFormSubmitted(true);
      resetForm();
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
        <Form>
          <div className={styles.addRecipeForm}>
            <Typography>Add recipe</Typography>

            <FileUploadField name="file" reset={isFormSubmitted} />

            <CustomTextField name="title" placeholder="Enter item title" />

            <CustomTextField name="about" placeholder="Enter about recipe" />

            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              width="100%"
            >
              <Select name="category" label="Category" options={categories} />

              <Select
                name="cookingTime"
                label="Cooking time"
                options={cookingTime}
              />
            </Box>
            <CustomTextField
              name="recipe"
              placeholder="Enter recipe"
              multiline={true}
              rows={4}
            />
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
