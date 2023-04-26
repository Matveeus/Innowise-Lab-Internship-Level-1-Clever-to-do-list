import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import AddTaskModal from './AddTaskModal';

export default function FooterButtons() {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(removeUser())}
        sx={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}
      >
        <ExitToAppIcon />
      </IconButton>
    </Box>
  );
}
