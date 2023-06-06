import React, { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ref, update } from 'firebase/database';
import { auth, db } from '../../services/firebase';
import TaskForm from './TaskForm';

export default function EditTaskModal({
  name, description, taskId,
}) {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);
  const [error, setError] = useState(null);

  const handleModal = () => {
    setTaskTitle(name);
    setTaskDescription(description);
    setOpen(!open);
  };

  const handleUpdateTask = (selectedDay) => {
    console.log(selectedDay);
    if (taskTitle) {
      update(ref(db, `/${auth.currentUser.uid}/${taskId}`), {
        text: taskTitle,
        description: taskDescription,
        date: selectedDay,
      });
      setOpen(false);
    } else {
      setError('Please, enter task title');
    }
  };

  const taskProps = {
    handleSubmit: handleUpdateTask,
    handleClickClose: handleModal,
    heading: 'What are you going to change ? 🧐',
    open,
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
    buttonText: 'UPDATE',
    error,
    setError,
  };

  return (
    <div>
      <IconButton aria-label="edit task" onClick={handleModal}>
        <Edit />
      </IconButton>
      <TaskForm {...taskProps} />
    </div>
  );
}
