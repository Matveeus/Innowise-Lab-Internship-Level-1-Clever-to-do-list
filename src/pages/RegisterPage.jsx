import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/Register';

function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <Register />
      <p>
        Already have account ?
        <Link to="/login">login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
