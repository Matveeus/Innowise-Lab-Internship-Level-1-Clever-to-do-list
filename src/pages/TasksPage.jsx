import React from 'react';
import { Navigate } from 'react-router-dom';
import userAuth from '../hooks/user-auth';
import Calendar from '../components/Calendar';
import FooterButtons from '../components/FooterButtons';

function TasksPage() {
  const { isAuth } = userAuth();

  return isAuth ? (
    <>
      <Calendar />
      <h1>Tasks</h1>
      <FooterButtons />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default TasksPage;
