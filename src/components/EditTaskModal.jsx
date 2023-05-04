import React, { useState, useContext } from 'react';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ref, update } from 'firebase/database';
import TaskForm from './TaskForm';
import { auth, db } from '../services/firebase';
import { TodoContext } from '../context';

export default function EditTaskModal({
  name, description, taskId,
}) {
  const {
    today, maxDate,
  } = useContext(TodoContext);
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);

  const handleModal = () => {
    setTaskTitle(name);
    setTaskDescription(description);
    setOpen(!open);
  };

  const handleSubmit = (selectedDay) => {
    if (taskTitle) {
      update(ref(db, `/${auth.currentUser.uid}/${taskId}`), {
        text: taskTitle,
        description: taskDescription,
        date: selectedDay,
      });
      console.log(selectedDay);
      setOpen(false);
    }
  };

  return (
    <div>
      <IconButton aria-label="edit task" onClick={handleModal}>
        <Edit />
      </IconButton>
      <TaskForm handleSubmit={handleSubmit} handleClickClose={handleModal} heading="What are you going to change ? 🧐" today={today} maxDate={maxDate} open={open} taskTitle={taskTitle} setTaskTitle={setTaskTitle} taskDescription={taskDescription} setTaskDescription={setTaskDescription} buttonText="UPDATE" />
    </div>
  );
}
