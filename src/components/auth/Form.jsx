import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import {
  signInWithRedirect,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import ErrorBar from '../ErrorBar';
import SocialLoginButtons from './SocialLoginButtons';

function Form({
  title, handleClick, buttonTitle, error, setError,
}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const { email, password, passwordRepeat } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialSignIn = async (auth, authProvider) => {
    try {
      await signInWithRedirect(auth, authProvider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
          <Button
            onClick={() => handleClick(email, password, passwordRepeat)}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {buttonTitle}
          </Button>
        </Box>
      </Container>
      <ErrorBar error={error} setError={setError} />
    </>
  );
}

export default Form;
