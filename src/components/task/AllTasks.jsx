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
      <Box sx={{ padding: '10px', border: '1px solid #1565c0', borderRadius: '10px' }}>
        {filteredTasks.map((task) => (
          <Task
            key={task.uidd}
            taskId={task.uidd}
            name={task.text}
            description={task.description}
            checked={task.checked}
          />
        ))}
      </Box>
    </Box>
  );
}

export default AllTasks;
