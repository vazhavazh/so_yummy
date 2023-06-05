import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('Must be string')
    .required('Please enter your name')
    .matches(/^[a-zA-Z0-9а-яА-ЯІіЇї]+$/, 'Special symbols are not allowed')
    .min(1, 'Your username is too short')
    .max(16, 'Username cannot be longer than 16 characters'),
  email: Yup.string()
    .typeError('Must be string')
    .email('Invalid email')
    .required('Please enter your email')
    .min(7, 'Your email is too short')
    .max(35, 'Email cannot be longer than 35 characters')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  password: Yup.string()
    .typeError('Must be string')
    .trim()
    .required('Please enter your password')
    .min(6, 'Your password is too short')
    .max(16, 'Password cannot be longer than 16 characters')
    .test(
      'password',
      'Your password is little secure. Add a capital letter.',
      value => /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value || '')
    ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .required('Please enter your password')
    .min(6, 'Your password is too short')
    .max(16, 'Password cannot be longer than 20 characters'),
});
