import React from 'react';
import { Container } from '@mui/material';
import Login from '../components/auth/Login';
import AuthLink from '../components/auth/Link';

function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Login />
      <AuthLink text="Don&apos;t have an account? Register!" link="/register" />
    </Container>
  );
}

export default LoginPage;
