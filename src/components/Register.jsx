import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import Form from './Form';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      .catch();
  };

  return (
    <Form
      title="register"
      handleClick={handleRegister}
    />
  );
}

export default Register;
