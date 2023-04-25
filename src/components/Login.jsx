import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Snackbar } from '@mui/material';
import { setUser } from '../store/slices/userSlice';
import Form from './Form';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/');
      })
    // eslint-disable-next-line no-shadow
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Form
        title="Sign in"
        handleClick={handleLogin}
        buttonTitle="login"
      />
      <Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Login;
