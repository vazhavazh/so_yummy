import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: 'standart',
    color: 'primary',
    onClick: handleSubmit,
    sx: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#FAFAFA',
      width: '129px',
      height: '46px',
      borderRadius: '24px 44px',
      border: '1px solid #F0F0F0',
      background: '#22252A',
      textTransform: 'none',
      '&:hover': {
        background: '#8BAA36',
      },
      '@media screen and (min-width: 768px)': {
        width: '161px',
        height: '52px',
      },
    },
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
