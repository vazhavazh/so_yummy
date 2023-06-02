import React from 'react';
import { TextField, styled } from '@mui/material';
import { useField } from 'formik';

const CustomTextField = styled(TextField)(({ theme, error }) => ({
  borderBottom: `1px solid ${error ? 'red' : 'black'}`,
  '& .MuiOutlinedInput-notchedOutline': {
    outline: 'none',
    border: 'none',
  },
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-20px', // Adjust the value to position the helper text as desired
  },
}));

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <CustomTextField {...configTextField} />;
};

export default TextfieldWrapper;
