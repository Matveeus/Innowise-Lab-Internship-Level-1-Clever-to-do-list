import React, { useContext } from 'react';
import { Box } from '@mui/material';
import Task from './Task';
import TasksHeading from './TasksHeading';
import { TodoContext } from '../../context/calendarData';

function AllTasks() {
  const { tasks, selectedDay } = useContext(TodoContext);
  const filteredTasks = tasks.filter((task) => task.date === selectedDay);

  return (
    <Box sx={{ maxWidth: 800, m: '0 auto', mb: '100px' }}>
      <TasksHeading tasksQuantity={filteredTasks.length} />
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          taskId={task.uidd}
          name={task.text}
          description={task.description}
          checked={task.checked}
        />
      ))}
    </Box>
  );
}

export default AllTasks;
