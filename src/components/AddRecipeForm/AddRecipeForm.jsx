import { Grid, Container, Typography, Box } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AddRecipeForm.module.scss';
import CustomTextField from './TextField';
import Select from './Select';
import Button from './Button';
import categories from './categories';
import cookingTime from './cookingTime';
import { FileUploadField } from './FileInputField';

const MAX_FILE_SIZE = 102400; //100KB

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
    .required('Please, upload image')
    .test('is-valid-type', 'Not a valid image type', value =>
      isValidFileType(value && value.name.toLowerCase(), 'image')
    )
    .test(
      'is-valid-size',
      'Max allowed size is 100KB',
      value => value && value.size <= MAX_FILE_SIZE
    ),
});

export const AddRecipeForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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

            <FileUploadField name="file" />

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
            <Button>Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
