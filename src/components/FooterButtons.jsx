import React, { useState } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {
  Alert, Box, IconButton, Snackbar,
} from '@mui/material';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import AddTaskModal from './AddTaskModal';

export default function FooterButtons() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/login');
    })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '30px',
        width: '100%',
        gap: '40px',
      }}
    >
      <AddTaskModal />
      <IconButton
        color="primary"
        aria-label="log out"
        onClick={handleSignOut}
        sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}
      >
        <ExitToAppIcon />
      </IconButton>
      <Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
