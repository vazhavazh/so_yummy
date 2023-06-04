import { Grid, Container, Typography, Box } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AddRecipeForm.module.scss';
import CustomTextField from './TextField';
import Select from './Select';
import Button from './Button';
import categories from './categories';
import cookingTime from './cookingTime';
import { ReactComponent as FileInputImage } from './images/fileInputImage.svg';
import { IconButton } from './UploadFileButton/UploadFileButton';

const initialValues = {
  title: '',
  about: '',
  category: '',
  cookingTime: '',
  recipe: '',
  file: '',
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  about: Yup.string().required('About is required'),
  category: Yup.string().required('Category is required'),
  cookingTime: Yup.string().required('Cooking time is required'),
  recipe: Yup.string().required('Recipe is required'),
  file: Yup.mixed(),
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
            <Box
              width="279px"
              height="268px"
              backgroundColor="#8BAA36"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FileInputImage width="64px" height="64px" />
            </Box>
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

// export const AddRecipeForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };
//   return (
//     <div className={styles.addRecipeForm}>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//   <Field
//     className={styles.addRecipeInput}
//     name="title"
//     type="text"
//     placeholder="Enter item title"
//   />
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
