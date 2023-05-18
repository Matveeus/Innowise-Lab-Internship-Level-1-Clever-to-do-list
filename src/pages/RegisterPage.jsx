import React from 'react';
import { Container } from '@mui/material';
import Register from '../components/auth/Register';
import AuthLink from '../components/auth/Link';

function RegisterPage() {
  return (
    <Container maxWidth="sm">
      <Register />
      <AuthLink text="Already have an account? Sign In!" link="/login" />
    </Container>
  );
}

export default RegisterPage;
