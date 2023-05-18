import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import Calendar from '../components/Calendar';
import FooterButtons from '../components/FooterButtons';
import AllTasks from '../components/task/AllTasks';

function Tasks() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });
  });
  return (
    <>
      <Calendar />
      <AllTasks />
      <FooterButtons />
    </>
  );
}

export default Tasks;
