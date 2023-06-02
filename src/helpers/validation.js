import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter your name')
    .matches(/^[a-zA-Z0-9]+$/, 'Special symbols are not allowed')
    .min(3, 'Your username is too short')
    .max(12, 'Username cannot be longer than 12 characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  password: Yup.string()
    .trim()
    .required('Please enter your password')
    .min(6, 'Your password is too short')
    .max(16, 'Password cannot be longer than 20 characters')
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

export const UpdateUserSchema = Yup.object().shape({
  file: Yup.mixed().notRequired(),
  nickname: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Special symbols are not allowed')
    .min(3, 'Your username is too short')
    .max(12, 'Username cannot be longer than 12 characters')
    .notRequired(),
});

export const addRecipeSchema = Yup.object().shape({
  fullImage: Yup.mixed().required('Image recipe is required'),
  title: Yup.string().required('Title recipe is required'),
  description: Yup.string().required('Description recipe is required'),
  category: Yup.string().required('Category recipe is required'),
  time: Yup.string().required('Time recipe is required'),
  selectedIngredients: Yup.array()
    .min(1, 'You need minimun one ingregient')
    .of(
      Yup.object().shape({
        id: Yup.string(),
        title: Yup.object()
          .shape({
            _id: Yup.string(),
            ttl: Yup.string()
              .max(200, 'Maximum 200 characters')
              .required('You need choose name from the list'),
          })
          .required('You need choose name from the list'),
        amount: Yup.string('Amount must be a number')
          .min(1, 'You need to add weight')
          .required('Amount ingredient is required'),
        unit: Yup.string().required(),
      })
    )
    .required('At least one ingredient is required'),
  instructions: Yup.string()
    .max(2000, 'Maximum 2000 characters')
    .required('Recipe instruction is required'),
});
