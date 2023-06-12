import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Form from './Form';
import useAuthState from '../../hooks/useAuthState';

function Register() {
  const [error, setError] = useState(null);

  const handleRegister = async (email, password, passwordRepeat) => {
    if (password === passwordRepeat) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError('Password and password confirmation do not match');
    }
  };

  useAuthState();

  return (
    <Form
      title="Registration"
      handleClick={handleRegister}
      error={error}
      setError={setError}
      buttonTitle="register"
    />
  );
}

export default Register;
