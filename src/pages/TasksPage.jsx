import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import Calendar from '../components/Calendar';
import FooterButtons from '../components/FooterButtons';
import Tasks from '../components/Tasks';

function TasksPage() {
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
      <Tasks />
      <FooterButtons />
    </>
  );
}

export default TasksPage;
