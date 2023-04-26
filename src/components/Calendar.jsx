import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import '../App.css';

function Calendar() {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const daysInNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate();

  const daysOfMonth = {};
  [...Array(daysInNextMonth - today.getDate()).keys()]
    .map((i) => i + today.getDate())
    .forEach((day) => {
      daysOfMonth[new Date(today.getFullYear(), today.getMonth(), day + 1)
        .toISOString().slice(0, 10)] = day;
    });

  const nextMonthDays = today.getDate();
  if (nextMonthDays > 0) {
    const nextMonthDaysArray = [...Array(nextMonthDays).keys()].map((i) => i + 1);
    nextMonthDaysArray.forEach((day) => {
      daysOfMonth[new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day + 1)
        .toISOString().slice(0, 10)] = day;
    });
  }

  const [selectedDay, setSelectedDay] = useState(Object.keys(daysOfMonth)[0]);

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
        paddingBottom: '12px',
      }}
    >
      {Object.entries(daysOfMonth).map(([date, day]) => (
        <Box
          key={date}
          sx={{
            minWidth: 60,
            flexShrink: 0,
            textAlign: 'center',
            // eslint-disable-next-line no-nested-ternary
            backgroundColor: new Date(date).toDateString() === today.toDateString() ? '#357a38' : date === selectedDay ? 'primary.main' : 'transparent',
            // eslint-disable-next-line no-nested-ternary
            color: new Date(date).toDateString() === today.toDateString() ? 'common.white' : date === selectedDay ? 'common.white' : 'inherit',
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
        </Box>
      ))}
    </Box>
  );
}

export default Calendar;
