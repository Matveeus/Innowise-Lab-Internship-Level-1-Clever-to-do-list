import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Register from '../components/auth/Register';

function RegisterPage() {
  return (
    <Container maxWidth="xs">
      <Register />
      <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Roboto' }}>
        <Link to="/login" variant="body2">
          Already have an account? Sign In!
        </Link>
      </div>
    </Container>
  );
}

export default RegisterPage;
