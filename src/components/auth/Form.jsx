import React, { useState } from 'react';
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import { signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../assets/images/logo.png';
import SocialLoginButtons from './SocialLoginButtons';
import firebaseErrors from '../../services/firebaseErrors';
import Loader from '../Loader';

function Form({ title, handleClick, buttonTitle, error, setError }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeatChange = e => {
    setPasswordRepeat(e.target.value);
  };

  const handleSocialSignIn = async (auth, authProvider) => {
    try {
      setIsLoading(true);
      await signInWithRedirect(auth, authProvider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading === true) {
    return <Loader />;
  }

  const handleFormSubmit = () => {
    handleClick(email, password, passwordRepeat);
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
          {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
          error={errors?.email && true}
          helperText={errors?.email && (errors?.email.message || 'Enter a valid email')}
          value={email}
          onChange={handleEmailChange}
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
          {...register('password', {
            required: 'Wrong password',
            minLength: { value: 6, message: 'Enter 6+ symbols' },
          })}
          error={errors?.password && true}
          helperText={errors?.password && (errors?.password.message || 'Wrong password')}
          value={password}
          onChange={handlePasswordChange}
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
            {...register('passwordRepeat', {
              required: 'Password and password confirmation do not match',
              validate: value => value === password,
            })}
            error={errors?.passwordRepeat && true}
            helperText={
              errors?.passwordRepeat &&
              (errors?.passwordRepeat.message || 'Password and password confirmation do not match')
            }
            value={passwordRepeat}
            onChange={handlePasswordRepeatChange}
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
        {error && (
          <Alert severity="error" onClose={() => setError('')} sx={{ width: '100%' }}>
            {firebaseErrors[error]}
          </Alert>
        )}
        <Button
          onClick={handleSubmit(handleFormSubmit)}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {buttonTitle}
        </Button>
      </Box>
    </Container>
  );
}
export default Form;
