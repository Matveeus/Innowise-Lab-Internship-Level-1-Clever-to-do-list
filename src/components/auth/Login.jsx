import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Form from './Form';
import useAuthState from '../../hooks/useAuthState';
import Loader from '../Loader';

function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useAuthState();

  if (isLoading === true) {
    return <Loader />;
  }

  return <Form title="Sign in" handleClick={handleLogin} error={error} setError={setError} buttonTitle="login" />;
}

export default Login;
