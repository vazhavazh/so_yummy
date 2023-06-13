import React from 'react';
import { TextField, styled } from '@mui/material';
import { useField } from 'formik';

const AddRecipeTextField = styled(TextField)(({ theme, error }) => ({
  borderBottom: `1px solid ${error ? 'red' : '#E0E0E0'}`,
  '& .MuiOutlinedInput-root': {
    '& input': {
      paddingLeft: 0,
    },
    '& fieldset': {
      paddingLeft: 0,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    outline: 'none',
    border: 'none',
  },
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-20px',
    marginLeft: '0px',
  },
  '& .MuiPopover-paper': {
    width: '122px',
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

  return <AddRecipeTextField {...configTextField} />;
};

export default TextfieldWrapper;
