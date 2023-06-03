import React from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { SignupSchema } from '../helpers/yup';
const RegisterPage = () => {
  return (
    <div>
      <AuthForm
        schema={SignupSchema}
        title="Registration"
        redirect="Sign in"
        page="register"
      />
    </div>
  );
};

export default RegisterPage;
