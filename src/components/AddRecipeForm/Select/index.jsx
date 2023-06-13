import React from 'react';
import { Select, MenuItem, styled, Box } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { ReactComponent as DropDownIcon } from '../images/dropDownIcon.svg';

const AddRecipeSelect = styled(Select)(({ theme, error }) => ({
  paddingTop: '16.5px',
  paddingBottom: '16.5px',
  textAlign: 'end',
  width: '160px',
  '& .MuiSelect-icon': { top: 'calc(55% - 0.5em)' },
  '&::before': {
    content: '""',
    left: '-183px',
    left: '-120%',
    opacity: '0.3',
  },
}));

const SelectWrapper = ({ name, options, label, text, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = e => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    variant: 'standard',
    onChange: handleChange,
    IconComponent: DropDownIcon,
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: '220px',
          width: '155px',
        },
      },
    },
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    // configSelect.helperText = meta.error;
  }

  return (
    <Box position="relative">
      <AddRecipeSelect label={label} {...configSelect}>
        {Object.keys(options).map((item, position) => {
          return (
            <MenuItem key={position} value={item}>
              {options[item]}
            </MenuItem>
          );
        })}
      </AddRecipeSelect>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-183px',
          transform: 'translateY(-50%)',
          opacity: '0.5',
        }}
      >
        <span style={{ textAlign: 'end' }}>{label}</span>
      </div>
    </Box>
  );
};

export default SelectWrapper;
