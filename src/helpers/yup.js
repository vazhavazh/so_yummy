import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('Must be string')
    .required('Please enter your name')
    .matches(/^[a-zA-Z0-9а-яА-ЯІіЇї]+$/, 'Special symbols are not allowed')
    .min(1, 'Your username is too short')
    .max(16, 'Username cannot be longer than 16 characters'),
  email: Yup.string()
    .email('Invalid email')
    .typeError('Must be string')
    .trim()
    .required('Please enter your email')
    .min(7, 'Your email is too short')
    .max(35, 'Email cannot be longer than 35 characters')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
      'Password is little secure.Please enter an uppercase letter, a lowercase letter, and a number',
      value =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(value || '')
    ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .trim()
    .required('Please enter your password')
    .min(6, 'Your password is too short')
    .max(16, 'Password cannot be longer than 16 characters'),
});

export const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .typeError('Must be string')
    .trim()
    .required('Please enter your email')
    .min(7, 'Your email is too short')
    .max(35, 'Email cannot be longer than 35 characters')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
});
