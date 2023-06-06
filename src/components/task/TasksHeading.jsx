import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
import { TodoContext } from '../../context/calendarData';

function TasksHeading({ tasksQuantity }) {
  const {
    selectedDay,
  } = useContext(TodoContext);
  return (
    <Typography
      variant="h5"
      color="black"
      component="div"
      sx={{
        textAlign: 'center', mt: 15, mb: 10, color: 'text',
      }}
    >
      {`You have ${tasksQuantity} task(s) for ${dayjs(selectedDay).format('MMMM DD')}`}
    </Typography>
  );
}

export default TasksHeading;
