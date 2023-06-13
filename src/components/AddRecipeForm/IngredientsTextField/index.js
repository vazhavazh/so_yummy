import React from 'react';
import { TextField, styled } from '@mui/material';
import { useField } from 'formik';

const IngredientsTextField = styled(TextField)(({ theme, error }) => ({}));

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
    // configTextField.helperText = meta.error;
  }

  return <IngredientsTextField {...configTextField} />;
};

export default TextfieldWrapper;
