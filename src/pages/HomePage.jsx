import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import Calendar from '../components/Calendar';
import FooterButtons from '../components/FooterButtons';
import AllTasks from '../components/task/AllTasks';
import Loader from '../components/Loader';

function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      if (!user) {
        navigate('/login');
      }
    });
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Calendar />
      <AllTasks />
      <FooterButtons />
    </>
  );
}

export default HomePage;
