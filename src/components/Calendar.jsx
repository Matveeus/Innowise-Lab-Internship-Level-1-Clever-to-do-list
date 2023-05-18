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
    <>
      <Typography variant="h5" sx={{ m: '20px 0', textAlign: 'center', color: 'text' }}>Calendar</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '800px',
          m: '0 auto',
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
                scrollSnapAlign: 'center',
                borderRadius: '10px',
                border: '1px solid',
                borderColor: 'dayBorder',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'primary.main',
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
                      ? 'task.done'
                      : 'transparent',
                  }}
                />
                <CircleIcon
                  sx={{
                    width: '10px',
                    color: filteredTasks.some(
                      (task) => !task.checked,
                    )
                      ? 'task.todo'
                      : 'transparent',
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
