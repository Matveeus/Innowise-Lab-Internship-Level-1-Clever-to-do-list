import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import AddTaskModal from './task/AddTaskModal';
import ErrorBar from './ErrorBar';

export default function FooterButtons() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch(err => {
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
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '800px',
        width: '100%',
        gap: '40px',
        padding: '0 16px',
      }}
    >
      <AddTaskModal />
      <Button
        variant="contained"
        aria-label="log out"
        onClick={handleSignOut}
        sx={{ boxShadow: '0px 2px 5px rgba(0, 0.1, 0.1, 0)' }}
      >
        <ExitToAppIcon />
      </Button>
      <ErrorBar error={error} setError={setError} />
    </Box>
  );
}
