import React, { useContext, useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { TodoContext } from '../../context/calendarData';
import ErrorBar from '../ErrorBar';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function TaskForm({
  handleSubmit,
  handleClickClose,
  heading,
  open,
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  buttonText,
  error,
  setError,
}) {
  const {
    selectedDay, setSelectedDay, today, maxDate,
  } = useContext(TodoContext);
  const [tempSelectedDay, setTempSelectedDay] = useState(selectedDay);

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDatePickerChange = (tempSelected) => {
    const formattedDate = dayjs(tempSelected).format('YYYY-MM-DD');
    setTempSelectedDay(formattedDate);
  };

  const handleFormSubmit = () => {
    const selected = heading === 'What are you going to change ? 🧐' ? tempSelectedDay : selectedDay;
    setSelectedDay(selected);
    handleSubmit(selected);
  };

  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="close" onClick={handleClickClose}>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ textAlign: 'center', flex: 1 }} variant="h6" component="div">
              {heading}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          component="main"
          maxWidth="m"
          sx={{
            width: '100%',
            maxWidth: 800,
            margin: '0 auto',
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            fullWidth
            label="Task title"
            id="fullWidth"
            value={taskTitle}
            onChange={handleTaskTitleChange}
          />
          <TextField
            value={taskDescription}
            sx={{ m: '40px 0' }}
            id="filled-textarea"
            label="Task description"
            rows={4}
            multiline
            fullWidth
            onChange={handleTaskDescriptionChange}
          />
          <DatePicker
            sx={{
              width: '100%',
            }}
            onChange={handleDatePickerChange}
            label="Choose date, but think twice!"
            format="YYYY-MM-DD"
            value={dayjs(selectedDay)}
            minDate={dayjs(today)}
            maxDate={dayjs(maxDate)}
          />
          <Button
            autoFocus
            sx={{ m: '40px 0' }}
            color="success"
            fullWidth
            variant="contained"
            onClick={handleFormSubmit}
          >
            {buttonText}
          </Button>
          <ErrorBar error={error} setError={setError} />
        </Container>
      </Dialog>
    </div>
  );
}
