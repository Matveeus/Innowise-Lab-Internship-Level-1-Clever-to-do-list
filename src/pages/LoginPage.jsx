import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Login from '../components/Login';

function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Login />
      <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Roboto' }}>
        <Link to="/register" variant="body2">
          Don&apos;t have an account? Register!
        </Link>
      </div>
    </Container>
  );
}

export default LoginPage;
