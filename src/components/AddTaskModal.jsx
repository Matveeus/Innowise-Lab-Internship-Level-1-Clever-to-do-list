import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddIcon from '@mui/icons-material/Add';
import { Container, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddTaskModal() {
  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(today);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', minWidth: '220px', width: '100%', height: '40px',
        }}
        onClick={handleClickOpen}
      >
        Add new task
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ textAlign: 'center', flex: 1 }} variant="h6" component="div">
              What are you planning to do ? 🤔
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          component="main"
          maxWidth="m"
          sx={{
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField fullWidth label="Task title" id="fullWidth" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
          <TextField
            value={taskDescription}
            sx={{ mt: 4, mb: 4 }}
            id="filled-textarea"
            label="Task description"
            rows={4}
            multiline
            fullWidth
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <DatePicker
            sx={{
              width: '100%',
            }}
            label="Сhoose date, but think twice !"
            format="DD/MM/YYYY"
            value={dayjs(taskDate)}
            minDate={dayjs(today)}
            maxDate={dayjs(maxDate)}
              // eslint-disable-next-line no-shadow
            onChange={(taskDate) => setTaskDate(taskDate)}
          />
          <Button autoFocus sx={{ mt: 4, mb: 4 }} color="success" fullWidth variant="contained" onClick={handleClose}>
            save
          </Button>
        </Container>
      </Dialog>
    </div>
  );
}
