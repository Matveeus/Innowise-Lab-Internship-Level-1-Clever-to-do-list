import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { auth } from '../services/firebase';
import Calendar from '../components/Calendar';
import FooterButtons from '../components/FooterButtons';
import AllTasks from '../components/task/AllTasks';
import Loader from '../components/Loader';

const LoadingState = {
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
};

function HomePage() {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(LoadingState.Loading);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoadingState(LoadingState.Success);
      } else {
        setLoadingState(LoadingState.Error);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  if (loadingState === LoadingState.Loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ padding: '0 16px' }}>
      <Calendar />
      <AllTasks />
      <FooterButtons />
    </Box>
  );
}

export default HomePage;
