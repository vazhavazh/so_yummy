import React from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { SignupSchema } from '../helpers/validation';
const RegisterPage = () => {
  return (
    <div>
      <AuthForm
        schema={SignupSchema}
        title="Registration"
        redirect="Registration"
        page="register"
      />
    </div>
  );
};

export default RegisterPage;
