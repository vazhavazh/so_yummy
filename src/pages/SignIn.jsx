import React from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { LoginSchema } from '../helpers/yup';
const SignInPage = () => {
  return (
    <div>
      <AuthForm
        schema={LoginSchema}
        title="Sign In"
        redirect="Registration"
        page="signin"
      />
    </div>
  );
};

export default SignInPage;
