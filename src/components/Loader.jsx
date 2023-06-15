import React from 'react';
import { Container, Grid } from '@mui/material';
import '../assets/styles/App.css';

export default function Loader() {
  return (
    <Container>
      <Grid container sx={{ height: window.innerHeight - 45 }} alignItems="center">
        <Grid container alignItems="center" justifyContent="center">
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
