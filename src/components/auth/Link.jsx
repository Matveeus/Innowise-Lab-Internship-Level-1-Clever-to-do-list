import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function AuthLink({ text, link }) {
  return (
    <Link
      to={link}
      variant="body2"
      style={{
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        margin: '20px 0',
      }}
    >
      <Typography sx={{ color: 'primary.main' }}>
        {text}
      </Typography>
    </Link>
  );
}
