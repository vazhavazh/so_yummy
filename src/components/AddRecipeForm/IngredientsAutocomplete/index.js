import React from 'react';
import { Autocomplete, styled } from '@mui/material';
import { useField } from 'formik';

const IngredientsAutocomplete = styled(Autocomplete)(({ theme, error }) => ({
  color: 'red',
}));

const AutocompleteWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configAutocomplete = {
    ...field,
    ...otherProps,
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: '220px',
          width: '155px',
        },
      },
    },
  };

  return <IngredientsAutocomplete {...configAutocomplete} />;
};

export default AutocompleteWrapper;
