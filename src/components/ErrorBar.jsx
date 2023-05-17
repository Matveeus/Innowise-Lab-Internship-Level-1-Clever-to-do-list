import React from 'react';
import { Alert, Snackbar } from '@mui/material';

export default function ErrorBar({ error, setError }) {
  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={() => setError(null)}>
      <Alert severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
}
