import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Form from './Form';
import useAuthState from '../../hooks/useAuthState';
import Loader from '../Loader';

function Register() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (email, password, passwordRepeat) => {
    if (password === passwordRepeat) {
      try {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Password and password confirmation do not match');
    }
  };

  useAuthState();

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <Form title="Registration" handleClick={handleRegister} error={error} setError={setError} buttonTitle="register" />
  );
}

export default Register;
