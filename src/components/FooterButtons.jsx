import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, IconButton } from '@mui/material';
import { auth } from '../services/firebase';
import AddTaskModal from './task/AddTaskModal';
import ErrorBar from './ErrorBar';

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
      <ErrorBar error={error} setError={setError} />
    </Box>
  );
}
