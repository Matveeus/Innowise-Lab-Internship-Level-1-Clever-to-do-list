import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
import { TodoContext } from '../../context/calendarData';

function TasksHeading({ tasksQuantity }) {
  const { selectedDay } = useContext(TodoContext);
  return (
    <Typography
      variant="h5"
      color="black"
      component="div"
      sx={{
        textAlign: 'center',
        mt: 15,
        mb: 3,
        color: 'text',
      }}
    >
      {`You have ${tasksQuantity} ${tasksQuantity === 1 ? 'task' : 'tasks'} for ${dayjs(selectedDay).format(
        'MMMM DD',
      )} ${tasksQuantity === 0 ? '👎' : '💪'}`}
    </Typography>
  );
}

export default TasksHeading;
