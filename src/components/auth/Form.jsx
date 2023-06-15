import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import SocialLoginButtons from './SocialLoginButtons';

function Form({ title, handleClick, buttonTitle, error, setError }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeatChange = e => {
    setPasswordRepeat(e.target.value);
  };

  const validateEmail = newEmail => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(newEmail);
  };

  const handleSocialSignIn = async (auth, authProvider) => {
    try {
      await signInWithRedirect(auth, authProvider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError('INVALID_EMAIL');
      return;
    }

    handleClick(email, password, passwordRepeat);
  };

  const handleBlur = () => {
    if (error) {
      setError('');
    }
  };

  return (
    <Container component="main">
      <Box
        sx={{
          mt: 9,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <img src={logo} alt="to do list logo" style={{ width: '60%' }} />
        </Box>

        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <SocialLoginButtons handleSocialSignIn={handleSocialSignIn} />
        <Typography>OR</Typography>
        <TextField
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur}
          error={error === 'INVALID_EMAIL'}
          helperText={error === 'INVALID_EMAIL' ? 'Invalid email' : ''}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          value={password}
          onChange={handlePasswordChange}
          onBlur={handleBlur}
          error={error === 'INVALID_PASSWORD'}
          helperText={error === 'INVALID_PASSWORD' ? 'Invalid password' : ''}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        {title === 'Registration' && (
          <TextField
            value={passwordRepeat}
            onChange={handlePasswordRepeatChange}
            onBlur={handleBlur}
            error={error === 'PASSWORD_MISMATCH'}
            helperText={error === 'PASSWORD_MISMATCH' ? 'Passwords do not match' : ''}
            margin="normal"
            required
            fullWidth
            name="passwordRepeat"
            label="Repeat password"
            type="password"
            id="passwordRepeat"
            autoComplete="current-password"
          />
        )}
        <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          {buttonTitle}
        </Button>
      </Box>
    </Container>
  );
}

export default Form;
