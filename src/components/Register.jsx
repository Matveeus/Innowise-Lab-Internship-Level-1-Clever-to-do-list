import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert, Snackbar } from '@mui/material';
import { setUser } from '../store/slices/userSlice';
import Form from './Form';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        title="Registration"
        handleClick={handleRegister}
        buttonTitle="register"
      />
      <Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Register;
