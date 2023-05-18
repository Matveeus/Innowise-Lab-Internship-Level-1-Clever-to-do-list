import React, { useContext } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import '../App.css';
import { TodoContext } from '../context/calendarData';

function Calendar() {
  const {
    daysOfMonth, selectedDay, setSelectedDay, today,
    tasks,
  } = useContext(TodoContext);

  const handleDayClick = (date) => {
    setSelectedDay(date);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        paddingBottom: '7px',
      }}
    >
      {Object.entries(daysOfMonth).map(([date, day]) => {
        const filteredTasks = tasks.filter((task) => task.date === date);
        return (
          <Box
            key={date}
            sx={{
              minWidth: 60,
              flexShrink: 0,
              textAlign: 'center',
              backgroundColor:
                            new Date(date).toDateString() === today.toDateString()
                              ? '#357a38'
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
              scrollSnapAlign: 'center',
              borderRadius: '10px',
              border: '1px solid #ffffff',
              cursor: 'pointer',
              '&:hover': {
                border: '1px solid #2196f3',
              },
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
                  color: filteredTasks.some(
                    (task) => task.checked,
                  )
                    ? '#8bc34a'
                    : 'transparent',
                }}
              />
              <CircleIcon
                sx={{
                  width: '10px',
                  color: filteredTasks.some(
                    (task) => !task.checked,
                  )
                    ? '#ff3d00'
                    : 'transparent',
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Calendar;
