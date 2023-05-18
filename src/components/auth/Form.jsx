import React, { useState } from 'react';
import {
  Avatar, Box, Button, Container, TextField, Typography,
} from '@mui/material';
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';

function Form({ title, handleClick, buttonTitle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component="main">
      <Box
        sx={{
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '2px solid',
          borderColor: 'formBorder',
          borderRadius: '10px',
          padding: '10px 30px 10px 30px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockPersonRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          onClick={() => handleClick(email, password)}
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
