import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <p>
        Already have account ?
        <Link to="/login">login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
