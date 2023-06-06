import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import Form from './Form';
import ErrorBar from '../ErrorBar';
import useAuthState from '../../hooks/useAuthState';

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  useAuthState();

  return (
    <>
      <Form
        title="Registration"
        handleClick={handleRegister}
        buttonTitle="register"
      />
      <ErrorBar error={error} setError={setError} />
    </>
  );
}

export default Register;
