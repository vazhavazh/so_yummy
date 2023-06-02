import { Grid, Container, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AddRecipeForm.module.scss';
import CustomTextField from './TextField';
import Select from './Select';
import Button from './Button';
import categories from './categories';
import cookingTime from './cookingTime';

const initialValues = {
  title: '',
  about: '',
  category: '',
  cookingTime: '',
  message: '',
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  cookingTime: Yup.string().required('Required'),
  message: Yup.string(),
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Add recipe</Typography>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField name="title" placeholder="Enter item recipe" />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField name="about" placeholder="Enter about recipe" />
            </Grid>
            <Grid item xs={12}>
              <Select name="category" label="Category" options={categories} />
            </Grid>
            <Grid item xs={12}>
              <Select
                name="cookingTime"
                label="Cooking time"
                options={cookingTime}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                name="message"
                label="Enter recipe"
                multiline={true}
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button>Submit</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

// export const AddRecipeForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };
//   return (
//     <div className={styles.addRecipeForm}>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//           <Field
//             className={styles.addRecipeInput}
//             name="title"
//             type="text"
//             placeholder="Enter item title"
//           />
//           <Field
//             className={styles.addRecipeInput}
//             name="about"
//             type="text"
//             placeholder="Enter about recipe"
//           />
//           <Box height="50px" border="1px solid red">
//             <Field as={TextField} label="Select category" select>
//               <MenuItem value="Breakfast">Breakfast</MenuItem>
//               <MenuItem value="Dessert">Dessert</MenuItem>
//               <MenuItem value="Miscellaneous">Miscelaneous</MenuItem>
//             </Field>
//           </Box>

//           {/* <FormControl>
//             <div className={styles.categorySelect}>
//               <label className={styles.categoryLabel} id="1" htmlFor="category">
//                 Category
//               </label>
//               <Field
//                 as={Select}
//                 id="category"
//                 name="category"
//                 className={styles.select}
//               >
//                 <MenuItem value="Breakfast">Breakfast</MenuItem>
//                 <MenuItem value="Dessert">Dessert</MenuItem>
//                 <MenuItem value="Miscellaneous">Miscelaneous</MenuItem>
//               </Field>
//             </div>
//           </FormControl> */}

//           {/* <FormControl>
//             <div className={styles.categorySelect}>
//               <label
//                 className={styles.categoryLabel}
//                 id="1"
//                 htmlFor="cookingTime"
//               >
//                 Cooking time
//               </label>
//               <Field
//                 as={Select}
//                 id="cookingTime"
//                 name="cookingTime"
//                 className={styles.select}
//                 sx={{
//                   '& .MuiOutlinedInput-input': {
//                     border: 'none',
//                   },
//                 }}
//               >
//                 <MenuItem value="40min">40min</MenuItem>
//                 <MenuItem value="Dessert">Dessert</MenuItem>
//                 <MenuItem value="Miscellaneous">Miscelaneous</MenuItem>
//               </Field>
//             </div>
//           </FormControl> */}
//           <Box height={16} />
//           <Button type="submit" variant="contained" size="large">
//             Submit
//           </Button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
