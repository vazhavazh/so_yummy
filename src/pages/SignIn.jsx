import React from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { LoginSchema } from 'helpers/validation';
const SignInPage = () => {
  return (
    <div>
      <AuthForm
        schema={LoginSchema}
        title="Sign In"
        redirect="Sign in"
        page="signin"
      />
    </div>
  );
};

export default SignInPage;
