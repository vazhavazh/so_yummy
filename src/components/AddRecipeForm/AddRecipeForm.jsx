import {
  Button,
  Box,
  TextField,
  InputLabel,
  Input,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import styles from './AddRecipeForm.module.scss';

const initialValues = {
  title: '',
  about: '',
  category: 'Breakfast',
  cookingTime: '40min',
};

export const AddRecipeForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className={styles.addRecipeForm}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={styles.addRecipeInput}
            name="title"
            type="text"
            placeholder="Enter item title"
          />
          <Field
            className={styles.addRecipeInput}
            name="about"
            type="text"
            placeholder="Enter about recipe"
          />
          <FormControl>
            <div className={styles.categorySelect}>
              <label className={styles.categoryLabel} id="1" htmlFor="category">
                Category
              </label>
              <Field
                as={Select}
                id="category"
                name="category"
                className={styles.select}
                sx={{
                  '& .MuiOutlinedInput-input': {
                    border: 'none',
                  },
                }}
              >
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Miscellaneous">Miscelaneous</MenuItem>
              </Field>
            </div>
          </FormControl>
          <FormControl>
            <div className={styles.categorySelect}>
              <label
                className={styles.categoryLabel}
                id="1"
                htmlFor="cookingTime"
              >
                Cooking time
              </label>
              <Field
                as={Select}
                id="category"
                name="cookingTime"
                className={styles.select}
                sx={{
                  '& .MuiOutlinedInput-input': {
                    border: 'none',
                  },
                }}
              >
                <MenuItem value="40min">40min</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Miscellaneous">Miscelaneous</MenuItem>
              </Field>
            </div>
          </FormControl>
          <Box height={16} />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
