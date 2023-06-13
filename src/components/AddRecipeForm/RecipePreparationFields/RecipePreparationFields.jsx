import React from 'react';
import { Box, Typography, TextareaAutosize } from '@mui/material';
import { Field } from 'formik';

export const RecipePreparationFields = () => {
  return (
    <Box width="100%" mt="44px">
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '24px',
          color: '#3E4462',
        }}
      >
        Recipe Preparation
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          marginTop: '28px',
        }}
      >
        <TextareaAutosize
          name="preparation"
          placeholder="enter preparation here"
          variant="outlined"
        ></TextareaAutosize>
      </div>
    </Box>
  );
};
