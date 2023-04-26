import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
