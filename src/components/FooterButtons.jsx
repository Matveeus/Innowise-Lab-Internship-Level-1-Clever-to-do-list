import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

export default function FooterButtons() {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '20px',
        width: '100%',
        gap: '40px',
      }}
    >
      <Button variant="outlined" startIcon={<AddIcon />} sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', width: '250px' }}>
        Add new task
      </Button>
      <IconButton
        color="primary"
        aria-label="log out"
        onClick={() => dispatch(removeUser())}
        sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}
      >
        <ExitToAppIcon />
      </IconButton>
    </Box>
  );
}
