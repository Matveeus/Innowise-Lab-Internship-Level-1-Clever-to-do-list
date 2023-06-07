import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { set, ref } from 'firebase/database';
import { uid } from 'uid';
import { db, auth } from '../../services/firebase';
import TaskForm from './TaskForm';

export default function AddTaskModal() {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [error, setError] = useState(null);

  const handleModal = () => {
    setTaskTitle('');
    setTaskDescription('');
    setOpen(!open);
  };

  const createNewTask = (taskId, selectedDay) => {
    set(ref(db, `${auth.currentUser.uid}/${taskId}`), {
      text: taskTitle,
      description: taskDescription,
      checked: false,
      date: selectedDay,
      uidd: taskId,
    });
  };

  const handleSaveTask = (selectedDay) => {
    const taskId = uid();
    if (taskTitle) {
      createNewTask(taskId, selectedDay);
      setOpen(false);
    } else {
      setError('Please, enter task title');
    }
  };

  const taskProps = {
    handleSubmit: handleSaveTask,
    handleClickClose: handleModal,
    heading: 'What are you planning to do ? 🤔',
    open,
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
    buttonText: 'SAVE',
    error,
    setError,
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', minWidth: '220px', width: '100%', height: '40px',
        }}
        onClick={handleModal}
      >
        Add new task
      </Button>
      <TaskForm {...taskProps} />
    </Box>
  );
}
