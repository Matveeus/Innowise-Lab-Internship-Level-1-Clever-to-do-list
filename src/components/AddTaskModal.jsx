import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { set, ref } from 'firebase/database';
import { uid } from 'uid';
import { db, auth } from '../services/firebase';
import TaskForm from './TaskForm';
import { TodoContext } from '../context';

export default function AddTaskModal() {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const {
    today, maxDate,
  } = useContext(TodoContext);

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
      console.log(selectedDay);
      createNewTask(taskId, selectedDay);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', minWidth: '220px', width: '100%', height: '40px',
        }}
        onClick={handleModal}
      >
        Add new task
      </Button>
      <TaskForm handleSubmit={handleSaveTask} handleClickClose={handleModal} heading="What are you planning to do ? 🤔" today={today} maxDate={maxDate} open={open} taskTitle={taskTitle} setTaskTitle={setTaskTitle} taskDescription={taskDescription} setTaskDescription={setTaskDescription} buttonText="SAVE" />
    </div>
  );
}
