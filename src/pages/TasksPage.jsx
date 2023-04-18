import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userAuth from '../hooks/user-auth';
import { removeUser } from '../store/slices/userSlice';

function TasksPage() {
  const dispatch = useDispatch();
  const { isAuth } = userAuth();

  return isAuth ? (
    <>
      <h1>Tasks</h1>
      <button type="submit" onClick={() => dispatch(removeUser())}>Log out</button>
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default TasksPage;
