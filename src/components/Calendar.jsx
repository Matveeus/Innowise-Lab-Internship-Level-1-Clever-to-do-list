import React, { useContext } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import '../assets/styles/App.css';
import { TodoContext } from '../context/calendarData';
import { calendarBoxStyles, calendarContainerStyles } from '../assets/styles/calendarStyles';

function Calendar() {
  const { daysOfMonth, selectedDay, setSelectedDay, today, tasks } = useContext(TodoContext);

  const handleDayClick = date => {
    setSelectedDay(date);
  };

  return (
    <>
      <Typography variant="h5" sx={{ m: '20px 0', textAlign: 'center', color: 'text' }}>
        Calendar 📅
      </Typography>
      <Box sx={calendarContainerStyles}>
        {Object.entries(daysOfMonth).map(([date, day]) => {
          const filteredTasks = tasks.filter(task => task.date === date);
          return (
            <Box
              key={date}
              sx={{
                ...calendarBoxStyles,
                backgroundColor:
                  new Date(date).toDateString() === today.toDateString()
                    ? 'today'
                    : date === selectedDay
                    ? 'primary.main'
                    : 'transparent',
                color:
                  new Date(date).toDateString() === today.toDateString()
                    ? 'common.white'
                    : date === selectedDay
                    ? 'common.white'
                    : 'inherit',
                fontWeight: day === selectedDay ? 'bold' : 'normal',
              }}
              onClick={() => handleDayClick(date)}
            >
              <Typography variant="h5">{day}</Typography>
              <Typography variant="subtitle1">
                {new Date(date).toLocaleString('en-US', {
                  weekday: 'short',
                })}
              </Typography>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <CircleIcon
                  sx={{
                    width: '10px',
                    color: filteredTasks.some(task => task.checked) ? 'task.done' : 'transparent',
                  }}
                />
                <CircleIcon
                  sx={{
                    width: '10px',
                    color: filteredTasks.some(task => !task.checked) ? 'task.todo' : 'transparent',
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Calendar;
