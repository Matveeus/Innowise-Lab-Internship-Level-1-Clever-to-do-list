import React from 'react';
import {
  Box, Checkbox, Divider, IconButton, Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { remove, ref, update } from 'firebase/database';
import EditTaskModal from './EditTaskModal';
import { auth, db } from '../services/firebase';

function Task({
  taskId,
  name, description, checked,
}) {
  const deleteTask = (id) => {
    remove(ref(db, `/${auth.currentUser.uid}/${id}`));
  };
  const toggleComplete = () => {
    update(ref(db, `/${auth.currentUser.uid}/${taskId}`), {
      checked: !checked,
    });
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', m: '20px 0' }}>
        <Checkbox checked={checked} onClick={() => toggleComplete(checked)} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ textDecoration: checked ? 'line-through' : 'none', color: checked ? 'text.secondary' : 'text' }} onClick={() => toggleComplete(checked)}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div" sx={{ textDecoration: checked ? 'line-through' : 'none' }} onClick={() => toggleComplete(checked)}>
            {description}
          </Typography>
        </Box>
        <EditTaskModal name={name} description={description} taskId={taskId} />
        <IconButton aria-label="delete task">
          <Delete onClick={() => deleteTask(taskId)} />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
}

export default Task;
