import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import firebaseErrors from '../services/firebaseErrors';

export default function ErrorBar({ error, setError }) {
  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)}>
      <Alert severity="error" sx={{ width: '100%' }}>
        {firebaseErrors[error]}
      </Alert>
    </Snackbar>
  );
}
