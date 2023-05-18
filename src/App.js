import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Tasks from './pages/Tasks';
import { TodoContextProvider } from './context/calendarData';

function App() {
  return (
    <TodoContextProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </LocalizationProvider>
    </TodoContextProvider>
  );
}

export default App;
