import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import Form from './Form';
import ErrorBar from '../ErrorBar';

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async (email, password) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);

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
