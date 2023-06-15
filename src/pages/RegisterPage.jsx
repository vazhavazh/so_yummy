import React from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { SignupSchema } from '../helpers/yup';
import Leaf from 'components/Leaf/Leaf';
const RegisterPage = () => {
  return (
    <div>
      <AuthForm
        schema={SignupSchema}
        title="Registration"
        redirect="Sign in"
        page="register"
      />
      <Leaf/>
    </div>
  );
};

export default RegisterPage;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from 'redux/auth/authThunks';

// const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     const userData = {
//       name,
//       email,
//       password,
//     };
//     console.log(userData);
//     dispatch(registerUser({ ...userData }));
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <button type="submit">REGISTER</button>
//       </form>
//     </>
//   );
// };

// export default RegisterPage;
