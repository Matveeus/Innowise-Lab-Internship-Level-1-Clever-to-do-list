import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';
import { auth } from '../../services/firebase';
import ErrorBar from '../ErrorBar';

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);

  return (
    <>
      <Form
        title="Sign in"
        handleClick={handleLogin}
        buttonTitle="login"
      />
      <ErrorBar error={error} setError={setError} />
    </>
  );
}

export default Login;
