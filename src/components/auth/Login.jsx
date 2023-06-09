import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Form from './Form';
import useAuthState from '../../hooks/useAuthState';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  useAuthState();

  return (
    <Form
      title="Sign in"
      handleClick={handleLogin}
      error={error}
      setError={setError}
      buttonTitle="login"
    />
  );
}

export default Login;
